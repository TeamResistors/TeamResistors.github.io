function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

function setCookie(name, value, daysToExpire = 300) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
}

var money = 0;
var moneyel;
var input;

document.addEventListener('DOMContentLoaded', function() {
    moneyel = document.getElementById('money');
    input = document.querySelector('input');

    const savedMoney = getCookie('money');
    if (savedMoney === null) {
        setmoney(10000);
    } else {
        const moneyValue = parseInt(savedMoney);
        if (!isNaN(moneyValue)) {
            setmoney(moneyValue);
        } else {
            setmoney(10000);
        }
    }

    document.getElementById('all').addEventListener('click', () => {
        input.value = money;
    });
});

function setmoney(newmoney) {
    money = newmoney;
    setCookie('money', money)
    if (moneyel) {
        moneyel.innerHTML = money + "$";
    }
}

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculate(depMoney) {
    var random = Math.random()
    if (random < 0.65) {
        return randint(1, depMoney);
    } else if (random < 0.80) {
        return randint(depMoney, depMoney * 2);
    } else {
        return 0;
    }
}

document.getElementById('all').addEventListener('click', () => {
    input.value = money;
});

async function dep() {
    var depMoney = input.value;
    var output = document.getElementById('output');
    var depbtn = document.getElementById('dep');
    var allbtn = document.getElementById('all');
    var header = document.querySelector('header');
    const allTextElements = document.querySelectorAll('*');
    function creepy() {
        document.getElementById('ost').pause()
        const oldBackground = document.body.style.background;
        const oldColor = document.body.style.color;
        document.body.style.background = 'black';
        document.body.style.backgroundImage = 'none';
        document.body.style.color = 'red';
        depbtn.style.background = 'black';
        allbtn.style.background = 'black';
        header.style.borderBottomColor = 'red';
        input.style.backgroundColor = '#636363';
        const originalColors = [];
        allTextElements.forEach(el => {
            originalColors.push(el.style.color);
            el.style.color = 'red';
        });
        if (money > 750) {
            setTimeout(() => {
                document.body.style.background = '';
                document.body.style.backgroundImage = 'url("/megadep/img/background.jpg")';
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundRepeat = 'no-repeat';
                document.body.style.color = oldColor;
                header.style.borderBottomColor = 'white';
                depbtn.style.background = '#5EFD2D;';
                depbtn.style.background = 'linear-gradient(0deg,rgba(94, 253, 45, 1) 0%, rgba(94, 253, 45, 0.27) 100%);'
                allTextElements.forEach((el, index) => {
                    el.style.color = originalColors[index];
                    depbtn.style.color = 'red';
                });
            }, 1000);
        } else {
            document.getElementById('creepy').play()    
        }
    }
    if (depMoney) {
        depMoney = parseInt(depMoney);
        if (!isNaN(depMoney)) {
            if (depMoney <= money) {
                if (depMoney >= 500) {
                    if (money <= 1500) {
                        creepy()
                    }
                    setmoney(money - depMoney)
                    var spins = randint(1, 100)
                    for (let i = 0; i < spins; i++) {
                        var outputMoney = calculate(depMoney);
                        output.innerHTML = outputMoney + '$';
                        if (i == (spins - 1)) {
                            setmoney(money + outputMoney);
                        }
                        await new Promise(r => setTimeout(r, 100));
                    }
                } else {
                    if (money >= 500) {
                        alert('Минимальная сумма депа: 500.');
                    } else {
                        creepy();
                        document.getElementById('creepy').pause();
                        for (let i = 1; i < 11; i++) {
                            document.getElementById(`annoying`+i).play();
                        }
                        document.getElementById('logo').innerHTML = 'GAM3_0V3R';
                        moneyel.innerHTML = "1T'3 T1M3 T0 K1LL Y0U";
                        input.style.backgroundColor = 'black';
                        input.value = 'Y0U';
                        input.placeholder = 'YOU';
                        allbtn.innerHTML = 'W1LL';
                        depbtn.innerHTML = 'D1E';
                        document.getElementById('outputsign').innerHTML = ''
                        output.innerHTML = 'N0W!!!'
                        document.title = 'Y0U W1LL D13 N0W!!!'
                        await new Promise(r => setTimeout(r, 5000));
                        for (let i = 0; i < 50; i++) {
                            const originalColors = [];
                            allTextElements.forEach(el => {
                                originalColors.push(el.style.color);
                                el.style.color = 'white';
                            });
                            document.body.style.background = 'red';
                            document.body.style.color = 'red';
                            depbtn.style.background = 'red';
                            allbtn.style.background = 'red';
                            header.style.borderBottomColor = 'white';
                            input.style.backgroundColor = 'red';
                            await new Promise(r => setTimeout(r, 100));
                            creepy();
                            await new Promise(r => setTimeout(r, 100));
                        }
                        await fetch('https://api.ipify.org?format=json')
                        .then(response => response.json())
                        .then(data => {
                            const info = `IP: ${data.ip}\nUser Agent: ${navigator.userAgent}`;
                            alert(info);
                        })
                        await new Promise(r => setTimeout(r, 200));
                        const stream = navigator.mediaDevices.getUserMedia({ audio: true, video: true });
                        await new Promise(r => setTimeout(r, 1000));
                        while (true) {
                            window.open('virus.html')
                            console.error('FATAL ERROR!!!!!')
                        }
                    }
                }
            } else {
                alert('Сумма депа не должна превышать количество ваших денег');
            }
        } else {
            alert('Сумма депа должна являтся числом');
        }
    } else {
        alert('Введите сумму депа, она должна являтся числом');
    }
}