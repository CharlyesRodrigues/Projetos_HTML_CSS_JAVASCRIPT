class boxShadowGenerator{

constructor(
    horizontal, 
    horizontalRef, 
    vertical, 
    verticalRef,
    blue,
    blueRef,
    spread,
    spreadRef,
    previewBox,
    rule,
    webkitRule,
    mozRule
  ){

    this.horizontal    = horizontal;
    this.horizontalRef = horizontalRef;
    this.vertical      = vertical;
    this.verticalRef   = verticalRef;
    this.blue          = blue;
    this.blueRef       = blueRef;
    this.spread        = spread;
    this.spreadRef     = spreadRef;
    this.previewBox    = previewBox;
    this.rule          = rule;
    this.webkitRule    = webkitRule;
    this.mozRule       = mozRule;

  }

}

/*Selecionar elementos */

const horizontal = document.querySelector("#horizontal")
const horizontalRef = document.querySelector("#horizontal-value")
const vertical = document.querySelector("#vertical")
const verticalRef = document.querySelector("#vertical-value")
const blue = document.querySelector("blue")
const blueRef = document.querySelector("#blue-value")
const spread = document.querySelector("#spread")
const spreadRef = document.querySelector("#spread-value")

const previewBox =document.querySelector("#box")

const rule =document.querySelector("#rule span")
const webkitRule =document.querySelector("#webkit-rule span")
const mozRule =document.querySelector("#moz-rule span")


/**Criando as classes */

const boxShadow = new boxShadowGenerator(
    horizontal, 
    horizontalRef, 
    vertical, 
    verticalRef,
    blue,
    blueRef,
    spread,
    spreadRef,
    previewBox,
    rule,
    webkitRule,
    mozRule
)

console.log(boxShadow)
/*Eventos */