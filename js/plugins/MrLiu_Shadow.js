//=============================================================================
// MrLiu_Shadow.js
//=============================================================================
/*:
 * Version: 2015-11-18-0001
 * @plugindesc 描绘事件阴影 - Draw Events Shadow
 * 在 RMMV 游戏中非战斗界面下显示人物影子
 * @author MrLiu-过眼云烟
 * Draw shadows for actors and events in non-battle scene.
 * @param displayShadow
 * @desc Whether to enable displaying the shadows. 1=yes 0=no
 * 是否显示影子，1：是，0：否
 * @default 1
 *
 * @param shadowOpacity
 * @desc 影子的透明度
 * @default 150
 * @help 使用方法 - Usage
 * 默认情况下主角和队列都会显示影子，地图事件名中含有 Sh 则显示影子。例如：
 * 屠龙者·亚力克斯 Sh
 * Sh 屠龙者·亚力克斯
 * 屠龙者 Sh 亚力克斯
 * 都能显示这个事件的影子。
 *
 * The troop will always display the shadows by default,
 * events name which included "Sh" (CASE SENSITIVE) will display the shadows.
 *
 * For example:
 * Alex the Dragon Slayer Sh
 * Sh Alex the Dragon Slayer
 * Alex Sh the Dragon Slayer
 * Above-mentioned all of them will be able to draw a shadow to this event.
 *
 * 更新记录 - Change log
 * 2015-11-17-0001 - 由 Ryusa 进行英文转译。(Translated to English by Ryusa)
 * 2015-11-18-0001 - 可以设置影子的透明度。(The opacity option can be adjust by yourself now)
 */
//-----------------------------------------------------------------------------
var Imported = Imported || {};
Imported.MrLiu_Shadow = true;

var Lmd = Lmd || {};
Lmd.MrLiu_Shadow = Lmd.MrLiu_Shadow || {};
  var parameters = PluginManager.parameters('MrLiu_Shadow');
  var displayShadow = Number(parameters['displayShadow']) != 0;
  var shadowOpacity = Number(parameters['shadowOpacity']);
Lmd.MrLiu_Shadow.Sprite_Character_initialize = Sprite_Character.prototype.initialize;
Sprite_Character.prototype.initialize = function(character) {
    Lmd.MrLiu_Shadow.Sprite_Character_initialize.call(this,character);
	this._temperycharacter = character;
	if (displayShadow){
	if ((character instanceof Game_Player)||(character instanceof Game_Follower)){
	this.createShadowSet();
	this._showShadow = true;
	}
	if ((character instanceof Game_Event)&&((String(character.event().name)).indexOf("Sh") >= 0)){
		this.createShadowSet();
	    this._showShadow = true;
	}
	}
};
Sprite_Character.prototype.createShadowSet = function() {
    this._shadowSprite = new Sprite();
    this._shadowSprite.bitmap = ImageManager.loadSystem('Shadow1');
	this._shadowSprite.x = this.x;
    this._shadowSprite.y = this.y +8;
	this._shadowSprite.anchor.x = 0.5;
    this._shadowSprite.anchor.y = 1;
    this._shadowSprite.z = -1;
    this.addChild(this._shadowSprite);
}

Sprite_Character.prototype.update_character_shadow = function() {
	this._shadowSprite.scale.x = ((this.patternWidth() * 100) / 48) / 90.0;
	this._shadowSprite.scale.y = this._shadowSprite.scale.x;
    this._shadowSprite.opacity = shadowOpacity;
	this._shadowSprite.visible = (this._characterName != "");
}

Lmd.MrLiu_Shadow.Sprite_Character_update = Sprite_Character.prototype.update;
Sprite_Character.prototype.update = function() {
	Lmd.MrLiu_Shadow.Sprite_Character_update.call(this);
	if (this._showShadow == true) {
	this.update_character_shadow();
	}
}
