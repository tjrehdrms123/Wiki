/*
    > Character라는 기본틀인 생성자를 생성하고 Hero,Monster에서는 Character를 상속받는형식
    > Vehicle.apply(this, arguments);는 Vehicle의 this들을 그대로 받으란 뜻 
    > Sedan.prototype = Object.create(Vehicle.prototype);는 Sedan의 prototype과 Vehicle의 prototype을 연결하는 것
    > Object.create는 객체를 만들되 생성자는 실행하지 않는 겁
*/

window.addEventListener('load',function(){

function logMessage(msg,color){
    if(!color){
        color = 'block';
    }
    var div = document.createElement('div');
    div.innerHTML = msg;
    div.style.color = color;
    document.getElementById('log').appendChild(div);
}// 로그메세지를 HTML에 뿌려주는 함수 
    
var gameover = false;
var battle = false;  
// 전역 변수 게임종료 , 전투중을 판별해주는 변수이다    
    
function Character(name , hp , att){
    this.name = name;
    this.hp = hp;
    this.att = att;
}// 기본 생성자   
Character.prototype.attacked = function(damage){
    this.hp -= damage;
    logMessage(this.name + '의 체력이' + this.hp + '가 되었습니다');
    if(this.hp <= 0){
        battle = false;
    }
}// Character에 attacked메소드를 추가

Character.prototype.attack = function (target) {
    logMessage(this.name + '이 ' + target.name + '을 공격합니다');
    console.log('Character.prototype.attack > this.att : '+this.att);
    target.attacked(this.att); 
};
// Character에 attack메소드를 추가  
// 주의할점은 attack에서 target.attacked()함수를 호출하고있다

function Hero(name , hp , lev , xp){
    Character.apply(this, arguments);
    this.lev = lev || 1;
    this.xp = xp || 0;
}
// Here가 Character을 상속하고있다 , lev , xp가 추가되었다
    
Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;
Hero.prototype.attacked = function(dameage){
    this.hp -= dameage;
    logMessage(this.name + '님의 체력이' + this.hp + '남았습니다');
    if(this.hp <= 0){
        logMessage('죽었습니다 레벨' + this.lev + '에서 모험이 끝났습니다. F5를 눌러 다시 시작하세요','red');
        battle = false;
        gameover = true;
    }
};// 메소드 확장
Hero.prototype.attack = function(target){
    logMessage(this.name + '님이' + target.name + '을 공격합니다');
    console.log('Hero.prototype.attack > this.att: '+this.att);
    if(target.hp <= 0){
        this.gainXp(target);
    }
};// 메소드 확장
Hero.prototype.gainXp = function(target) {
  logMessage('전투에서 승리하여 ' + target.xp + '의 경험치를 얻습니다', 'blue');
  this.xp += target.xp;
  if (this.xp > 100 + 10 * this.lev) {
    this.lev++;
    logMessage('레벨업! ' + this.lev + ' 레벨이 되었습니다', 'blue');
    this.hp = 100 + this.lev * 10;
    this.xp -= 10 * this.lev + 100;
  }
};// gainXp메소드 추가   
      
function Monster(name , hp , att , lev ,xp ){
    Character.apply(this, arguments);
    this.lev = lev || 1;
    this.xp = xp || 10;
}
Monster.prototype = Object.create(Character.prototype);
Monster.prototype.constructor = Monster;
    
function makeMonster(){
    var monsterArray = [
        ['rabbit', 25, 3, 1, 35],
        ['skeleton', 50, 6, 2, 50],
        ['soldier', 80, 4, 3, 75],
        ['king', 120, 9, 4, 110],
        ['devil', 500, 25, 6, 250]
    ];
    var monster = monsterArray[Math.floor(Math.random() * 5)];
    return new Monster(monster[0],monster[1],monster[2],monster[3],monster[4]);
}

var hero = new Hero(prompt('이름을 입력'), 100, 10);
logMessage(hero.name + '님이 모험을 시작합니다. 어느 정도까지 성장할 수 있을까요?');
while (!gameover) {
  var monster = makeMonster();
  logMessage(monster.name + '을 마주쳤습니다. 전투가 시작됩니다', 'green'); 
  battle = true;   while(battle) {
    hero.attack(monster);
    if (monster.hp > 0) {
      monster.attack(hero);
    }
  }
    
}    
    
});