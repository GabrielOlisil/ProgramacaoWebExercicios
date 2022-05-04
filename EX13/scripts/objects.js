var carro = {
    modelo: "Golf",
    motor: "1.6",
    ano: 2005,
    showInfo: function(){
      alert ("Carro modelo: " + this.modelo + " " + this.motor + " Fabricação em: " + this.ano);    
    }
  };

// carro.modelo = "Corsa";
// carro.ano = "2000";
// delete carro.showInfo;

// alert(typeof carro.showInfo);

var x = 50;
var y = 25;

carro.showInfo();


