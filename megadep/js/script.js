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


function setmoney(newmoney) {
    money = newmoney;
    setCookie('money', money)
    document.getElementById('money').innerHTML = money + "$";
}

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculate(depMoney) {
    var random = Math.random()
    if (random < 0.55) {
        return randint(1, depMoney);
    } else if (random < 0.85) {
        return randint(depMoney, depMoney * 2);
    } else {
        return 0;
    }
}

async function dep() {
    var depMoney = document.getElementById('dep-money').value;
    var output = document.getElementById('output');
    if (depMoney) {
        depMoney = parseInt(depMoney);
        if (!isNaN(depMoney)) {
            if (depMoney <= money) {
                if (depMoney >= 500) {
                    setmoney(money - depMoney)
                    for (let i = 0; i < 50; i++) {
                        var outputMoney = calculate(depMoney);
                        output.innerHTML = outputMoney + '$';
                        if (i == 49) {
                            setmoney(money + outputMoney);
                        }
                        await new Promise(r => setTimeout(r, 200));
                    }
                } else {
                    alert('Минимальная сумма депа: 500.');
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