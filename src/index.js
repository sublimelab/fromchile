
class Main extends Phaser.Game{

	constructor(){
		
		if(screen.width > 1500){
			super(800, 600, Phaser.AUTO,null)	
		}
		else{
			super(window.innerWidth,window.innerHeight)
		}
	}

}

new Main() 