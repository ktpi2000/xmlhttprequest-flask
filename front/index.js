function postData(data) {
  let req = new XMLHttpRequest();
  let result = document.getElementById('result');
  req.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      result.innerHTML = this.responseText;
    } else {
      result.innerHTML = "processing";
    }
  }

  req.open('POST', 'http://localhost:5000', true);
  req.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
  req.send(data);
}

function fetchText() {
  let text = document.getElementById('text').value;
  this.postData(text)
}

function selectLanguage() {
  let language = document.getElementsByName('language');
  for (let i = 0; i < language.length; i++) {
    if (language[i].checked) {
      console.log('language:' + language[i].value);
      this.postData(language[i].value)
    }
  }
}