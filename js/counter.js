$(document).ready(function () {

	var Souls = 0;
	var Bugs = 0;
	var Skills = 0;
	var Bags = 0;
	var Bottles = 0;
	var HPieces = 0;

	var Quiver = 0;
	var Wallet = 0;
	var Scent = 0;
	var NextSkill = "null";

	var WalletType = "null";
	var RupeeCount = "0000";

	var QuiverType = "null";
	var ArrowCount = "000";


$("#Frame").on('click', function(e){
	if(e.which == 2){
		e.preventDefault();
	}
});

$("#PoeSouls").mousedown(function(event) {
    switch (event.which) {
        case 1:
            Souls += 1;
            break;
        case 3:
            Souls -=1;
            break;
    }
		$("#soulsCounter").html(Souls);
		if(Souls > 59){
			Souls = 59;
		}
		if(Souls < 1){
			Souls = 1;
		}
});

$("#HPIcon").mousedown(function(event) {
    switch (event.which) {
        case 1:
            HPieces += 1;
            break;
        case 3:
            HPieces -=1;
            break;
    }
		$("#HPCounter").html(HPieces);
		if(HPieces > 41){
			HPieces = 41;
		}
		if(HPieces < 1){
			HPieces = 1;
		}
});

	$("#GoldenBugs").mousedown(function(event) {
    switch (event.which) {
        case 1:
            Bugs += 1;
            break;
        case 3:
            Bugs -=1;
            break;
    }
		$("#BugCounter").html(Bugs);
		if(Bugs > 23){
			Bugs = 23;
		}
		if(Bugs < 1){
			Bugs = 1;
		}
	});

	$("#Skills").mousedown(function(event) {
    switch (event.which) {
        case 1:
            Skills += 1;
            break;
        case 3:
            Skills -=1;
            break;
    }
		$("#SkillCounter").html(Skills);
		if(Skills > 6){
			Skills = 6;
		}
		if(Skills < 1){
			Skills = 1;
		}
	});

	$("#Bottles").mousedown(function(event) {
    switch (event.which) {
        case 1:
            Bottles += 1;
            break;
        case 3:
            Bottles -=1;
            break;
    }
		$("#BottleCounter").html(Bottles);
		if(Bottles > 3){
			Bottles = 3;
		}
		if(Bottles < 1){
			Bottles = 1;
		}
	});

	$("#BombBags").mousedown(function(event) {
    switch (event.which) {
        case 1:
            Bags += 1;
            break;
        case 3:
            Bags -=1;
            break;
    }
		$("#BagCounter").html(Bags);
		if(Bags > 2){
			Bags = 2;
		}
		if(Bags < 1){
			Bags = 1;
		}
	});


$("#QuiverIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            Quiver += 1;
            break;
        case 3:
            Quiver -=1;
            break;
    }
    	if(Quiver < 1){
    		this.src = "images/Quiver.png";
    	}
		if(Quiver == 1){
			this.src = "images/BigQuiver.png";
		}
		if(Quiver >= 2){
			this.src = "images/GiantQuiver.png";
			Quiver = 2;
		}
	});

$("#WalletIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            Wallet += 1;
            break;
        case 3:
            Wallet -=1;
            break;
    }
    	if(Wallet < 1){
    		this.src = "images/Wallet.png";
    	}
		if(Wallet == 1){
			this.src = "images/BigWallet.png";
		}
		if(Wallet >= 2){
			this.src = "images/GiantWallet.png";
			Wallet = 2;
		}
	});


$("#OSwordIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            this.src = "images/OrdonSword.png";
            break;
        case 3:
            this.src = "images/Blank.png";
            break;
    }
	});

$("#MSwordIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            this.src = "images/MasterSword.png";
            break;
        case 3:
            this.src = "images/Blank.png";
            break;
    }
	});

$("#OShieldIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            this.src = "images/OrdonShield.png";
            break;
        case 3:
            this.src = "images/Blank.png";
            break;
    }
	});

$("#HShieldIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            this.src = "images/HylianShield.png";
            break;
        case 3:
            this.src = "images/Blank.png";
            break;
    }
	});

$("#HTunicIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            this.src = "images/HeroTunic.png";
            break;
        case 3:
            this.src = "images/Blank.png";
            break;
    }
	});

$("#ZArmorIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            this.src = "images/ZoraArmor.png";
            break;
        case 3:
            this.src = "images/Blank.png";
            break;
    }
	});

$("#MArmorIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            this.src = "images/MagicArmor.png";
            break;
        case 3:
            this.src = "images/Blank.png";
            break;
    }
	});

$("#ScentIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            this.src = "images/Scent.png";
            break;
        case 3:
            this.src = "images/Blank.png";
            break;
    }
	});


$("#HCIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            this.src = "images/HorseCall.png";
            break;
        case 3:
            this.src = "images/Blank.png";
            break;
    }
	});

$("#HawkeyeIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            this.src = "images/Hawkeye.png";
            break;
        case 3:
            this.src = "images/Blank.png";
            break;
    }
	});

$("#EarringIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            this.src = "images/CoralEarring.png";
            break;
        case 3:
            this.src = "images/Blank.png";
            break;
    }
	});

$("#BookIcon").mousedown(function(event){
    switch (event.which) {
        case 1:
            this.src = "images/Skybook.png";
            break;
        case 3:
            this.src = "images/Blank.png";
            break;
    }
	});


/*  Hover Text */

$("#Wallet").hover(
	function(){
	if(Wallet < 1){
		WalletType = "Wallet";
		RupeeCount = "300";
	}
	if(Wallet == 1){
		WalletType = "Big Wallet";
		RupeeCount = "600";
	}
	if(Wallet >= 2){
		WalletType = "Giant Wallet";
		RupeeCount = "1000";
	}

	$(".HoverText").html(WalletType);
	$(".HoverSubText").html("Holds: " + RupeeCount + " Rupees");
}, function(){
	$(".HoverText").html("");
	$(".HoverSubText").html("");
}
);

$("#Quiver").hover(
	function(){
	if(Quiver < 1){
		QuiverType = "Quiver";
		ArrowCount = "30";
	}
	if(Quiver == 1){
		QuiverType = "Big Quiver";
		ArrowCount = "60";
	}
	if(Quiver >= 2){
		QuiverType = "Giant Quiver";
		ArrowCount = "100";
	}

	$(".HoverText").html(QuiverType);
	$(".HoverSubText").html("Holds: " + ArrowCount + " Arrows");
}, function(){
	$(".HoverText").html("");
	$(".HoverSubText").html("");
}
);

$("#Scent").hover(
	function(){
	$(".HoverText").html("Medicine Scent");
}, function(){
	$(".HoverText").html("");
}
);

$("#PoeSouls").hover(
	function(){
	$(".HoverText").html("Poe Souls");
}, function(){
	$(".HoverText").html("");
}
);

$("#Bottles").hover(
	function(){
	$(".HoverText").html("Bottles");
}, function(){
	$(".HoverText").html("");
}
);

$("#GoldenBugs").hover(
	function(){
	$(".HoverText").html("Gold Bugs");
}, function(){
	$(".HoverText").html("");
}
);



$("#Skills").hover(
	function(){
if(Skills == 0){
	NextSkill = "Ending Blow";
}
if(Skills == 1){
	NextSkill = "Shield Bash";
}
if(Skills == 2){
	NextSkill = "Back Slice";
}
if(Skills == 3){
	NextSkill = "Helm Splitter";
}
if(Skills == 4){
	NextSkill = "Mortal Draw";
}
if(Skills == 5){
	NextSkill = "Jump Strike";
}
if(Skills == 6){
	NextSkill = "Great Spin";
}

	$(".HoverText").html("Hidden Skills");
	$(".HoverSubText").html("Next Skill is: " + NextSkill);
}, function(){
	$(".HoverText").html("");
	$(".HoverSubText").html("");
}
);

$("#BombBags").hover(
	function(){
	$(".HoverText").html("Bomb Bags");
}, function(){
	$(".HoverText").html("");
}
);


$("#OrdonSword").hover(
	function(){
	$(".HoverText").html("Ordon Sword");
}, function(){
	$(".HoverText").html("");
}
);

$("#MasterSword").hover(
	function(){
	$(".HoverText").html("Master Sword");
}, function(){
	$(".HoverText").html("");
}
);

$("#OrdonShield").hover(
	function(){
	$(".HoverText").html("Ordon Shield");
}, function(){
	$(".HoverText").html("");
}
);

$("#HylianShield").hover(
	function(){
	$(".HoverText").html("Hylian Shield");
}, function(){
	$(".HoverText").html("");
}
);

$("#HeroTunic").hover(
	function(){
	$(".HoverText").html("Hero's Tunic");
}, function(){
	$(".HoverText").html("");
}
);

$("#ZoraArmor").hover(
	function(){
	$(".HoverText").html("Zora Armor");
}, function(){
	$(".HoverText").html("");
}
);

$("#MagicArmor").hover(
	function(){
	$(".HoverText").html("Magic Armor");
}, function(){
	$(".HoverText").html("");
}
);

$("#HPIcon").hover(
	function(){
	$(".HoverText").html("Heart Pieces");
}, function(){
	$(".HoverText").html("");
}
);

$("#HorseCall").hover(
	function(){
	$(".HoverText").html("Horse Call");
}, function(){
	$(".HoverText").html("");
}
);

$("#Hawkeye").hover(
	function(){
	$(".HoverText").html("Hawkeye");
}, function(){
	$(".HoverText").html("");
}
);

$("#Earring").hover(
	function(){
	$(".HoverText").html("Coral Earring");
}, function(){
	$(".HoverText").html("");
}
);

$("#Skybook").hover(
	function(){
	$(".HoverText").html("Ancient Sky Book");
}, function(){
	$(".HoverText").html("");
}
);

});
