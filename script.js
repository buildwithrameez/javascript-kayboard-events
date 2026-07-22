let inputEle = document.querySelector('#myinput');

    const handlekeypress = (event) => {

      document.querySelector('.keyPressed').textContent = event.key;

      document.querySelector('.keyCode').textContent = event.code;

      document.querySelector('.charCode').textContent =
      event.key.charCodeAt(0);

      document.querySelector('.eventType').textContent =
      event.type;
    }

    inputEle.addEventListener('keydown', handlekeypress);