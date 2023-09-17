(() => {
    const button = document.getElementById("button");
    const message = document.getElementById("message");
    const number = document.getElementById("number");
  
    const getAdvice = async () => {
      button.classList.add("loading");
  
      try {
        const res = await fetch("https://api.adviceslip.com/advice");
        const response = await res.json();
        message.innerText = response?.slip?.advice;
        number.innerText = response?.slip?.id;
  
        button.classList.remove("loading");
      } catch (e) {
        button.classList.remove("loading");
        console.log(
          "Calm Down",
          e
        );
      }
    };
  
    const init_button = () => {
      button.addEventListener("click", () => {
        getAdvice();
      });
    };
  
    init_button();
  })();
  