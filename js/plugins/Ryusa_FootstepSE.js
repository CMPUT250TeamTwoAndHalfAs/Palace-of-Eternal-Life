//=============================================================================
// Ryusa_FootstepSE.js
//=============================================================================
/*:
 * Version: 1.2 ENG
 * @plugindesc Ryusa Footstep Sound Effects System:
 * Responsive footstep sound efx when actor moving.
 * @author TsunetakaRyu : Ryusa Works
 *
 * @param Function Switch
 * @desc Set a switch number to activate this plugin.
 * @default 0
 *
 * @param Displaying Log
 * @desc Console[F8] will display logs if this param set as 'true'.
 * (true / false)
 * @default false
 *
 * @param Use Region ID
 * @desc For other plugin which already used Terrain ID, you can set 'true' to use Region ID instead.
 * (true / false)
 * @default false
 *
 * @param Basic Volume
 * @desc Standard volume for footstep se.
 * (Number 0 ~ 100)
 * @default 25
 *
 * @param Ceiling
 * @desc Set a fast limit volume for footstep se, this param should be use with Anti-Machinegun param.
 * (Number 0 ~ 100)
 * @default 30
 *
 * @param N Steps for 1 Sound when Dashing
 * @desc If the actors are dashing, how many steps for 1 se playing back?*
 * (Number 1 ~ 128, *See help for more info)
 * @default 2
 *
 * @param N Steps for 1 Sound when Walking
 * @desc If the actors are walking, how many steps for 1 se playing back?*
 * (Number 1 ~ 128, *See help for more info)
 * @default 1
 *
 * @param Enable Anti-Machinegun Effects
 * @desc Anti Machine-Gun Effect Suppressor*
 * (true / false, *See help for more info)
 * @default true
 *
 * @param Anti-Machinegun Level
 * @desc If the above param set as true, set a swing value here.
 * (Number 5 ~ 25)
 * @default 15
 *
 * @param AnalogMove Patch
 * @desc If you are using Sanshiro's AnalogMove, please set true.
 * (true / false, and make sure to put this plugin under AnalogMove!)
 * @default false
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Region or Terrain ID as Grass
 * @desc Terrain or Region ID as Grass.
 * @default 1
 *
 * @param Region or Terrain ID as Sand
 * @desc Terrain or Region ID as Sand.
 * @default 2
 *
 * @param Region or Terrain ID as Snow
 * @desc Terrain or Region ID as Snow.
 * @default 3
 *
 * @param Region or Terrain ID as Wood
 * @desc Terrain or Region ID as Wood.
 * @default 4
 *
 * @param Region or Terrain ID as Water
 * @desc Terrain or Region ID as Water.
 * @default 5
 *
 * @param Region or Terrain ID as Stone
 * @desc Terrain or Region ID as Stone.
 * @default 6
 *
 * @param Region or Terrain ID as Metal
 * @desc Terrain or Region ID as Metal.
 * @default 7
 *
 * @param Region or Terrain ID as Optional I
 * @desc Terrain or Region ID as User Optional I.
 * @default 8
 *
 * @param Region or Terrain ID as Optional II
 * @desc Terrain or Region ID as User Optional II.
 * @default 9
 *
 * @param Region or Terrain ID as Optional III
 * @desc Terrain or Region ID as User Optional III.
 * @default 10
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Grass Sample #1
 * @desc SE Filename for Grass.
 * @default fst_grass_light_walk_001
 *
 * @param Grass Sample #2
 * @desc SE Filename for Grass.
 * @default fst_grass_light_walk_002
 *
 * @param Grass Sample #3
 * @desc SE Filename for Grass.
 * @default fst_grass_light_walk_003
 *
 * @param Grass Sample #4
 * @desc SE Filename for Grass.
 * @default fst_grass_light_walk_004
 *
 * @param Grass Sample #5
 * @desc SE Filename for Grass.
 * @default fst_grass_light_walk_005
 *
 * @param Grass Sample #6
 * @desc SE Filename for Grass.
 * @default fst_grass_light_walk_006
 *
 * @param Grass Sample #7
 * @desc SE Filename for Grass.
 * @default
 *
 * @param Grass Sample #8
 * @desc SE Filename for Grass.
 * @default
 *
 * @param Grass Sample #9
 * @desc SE Filename for Grass.
 * @default
 *
 * @param Grass Sample #10
 * @desc SE Filename for Grass.
 * @default
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Sand Sample #1
 * @desc SE Filename for Sand.
 * @default fst_sand_light_walk_001
 *
 * @param Sand Sample #2
 * @desc SE Filename for Sand.
 * @default fst_sand_light_walk_002
 *
 * @param Sand Sample #3
 * @desc SE Filename for Sand.
 * @default fst_sand_light_walk_003
 *
 * @param Sand Sample #4
 * @desc SE Filename for Sand.
 * @default fst_sand_light_walk_004
 *
 * @param Sand Sample #5
 * @desc SE Filename for Sand.
 * @default fst_sand_light_walk_005
 *
 * @param Sand Sample #6
 * @desc SE Filename for Sand.
 * @default fst_sand_light_walk_006
 *
 * @param Sand Sample #7
 * @desc SE Filename for Sand.
 * @default
 *
 * @param Sand Sample #8
 * @desc SE Filename for Sand.
 * @default
 *
 * @param Sand Sample #9
 * @desc SE Filename for Sand.
 * @default
 *
 * @param Sand Sample #10
 * @desc SE Filename for Sand.
 * @default
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Snow Sample #1
 * @desc SE Filename for Snow.
 * @default fst_light_snow_walk_001
 *
 * @param Snow Sample #2
 * @desc SE Filename for Snow.
 * @default fst_light_snow_walk_002
 *
 * @param Snow Sample #3
 * @desc SE Filename for Snow.
 * @default fst_light_snow_walk_003
 *
 * @param Snow Sample #4
 * @desc SE Filename for Snow.
 * @default fst_light_snow_walk_004
 *
 * @param Snow Sample #5
 * @desc SE Filename for Snow.
 * @default fst_light_snow_walk_005
 *
 * @param Snow Sample #6
 * @desc SE Filename for Snow.
 * @default fst_light_snow_walk_006
 *
 * @param Snow Sample #7
 * @desc SE Filename for Snow.
 * @default
 *
 * @param Snow Sample #8
 * @desc SE Filename for Snow.
 * @default
 *
 * @param Snow Sample #9
 * @desc SE Filename for Snow.
 * @default
 *
 * @param Snow Sample #10
 * @desc SE Filename for Snow.
 * @default
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Wood Sample #1
 * @desc SE Filename for Wood.
 * @default fst_wood_light_walk_001
 *
 * @param Wood Sample #2
 * @desc SE Filename for Wood.
 * @default fst_wood_light_walk_002
 *
 * @param Wood Sample #3
 * @desc SE Filename for Wood.
 * @default fst_wood_light_walk_003
 *
 * @param Wood Sample #4
 * @desc SE Filename for Wood.
 * @default fst_wood_light_walk_004
 *
 * @param Wood Sample #5
 * @desc SE Filename for Wood.
 * @default fst_wood_light_walk_005
 *
 * @param Wood Sample #6
 * @desc SE Filename for Wood.
 * @default fst_wood_light_walk_006
 *
 * @param Wood Sample #7
 * @desc SE Filename for Wood.
 * @default
 *
 * @param Wood Sample #8
 * @desc SE Filename for Wood.
 * @default
 *
 * @param Wood Sample #9
 * @desc SE Filename for Wood.
 * @default
 *
 * @param Wood Sample #10
 * @desc SE Filename for Wood.
 * @default
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Water Sample #1
 * @desc SE Filename for Water.
 * @default fst_water_heavy_run_001
 *
 * @param Water Sample #2
 * @desc SE Filename for Water.
 * @default fst_water_heavy_run_002
 *
 * @param Water Sample #3
 * @desc SE Filename for Water.
 * @default fst_water_heavy_run_003
 *
 * @param Water Sample #4
 * @desc SE Filename for Water.
 * @default
 *
 * @param Water Sample #5
 * @desc SE Filename for Water.
 * @default
 *
 * @param Water Sample #6
 * @desc SE Filename for Water.
 * @default
 *
 * @param Water Sample #7
 * @desc SE Filename for Water.
 * @default
 *
 * @param Water Sample #8
 * @desc SE Filename for Water.
 * @default
 *
 * @param Water Sample #9
 * @desc SE Filename for Water.
 * @default
 *
 * @param Water Sample #10
 * @desc SE Filename for Water.
 * @default
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Stone Sample #1
 * @desc SE Filename for Stone.
 * @default fst_stone_light_walk_001
 *
 * @param Stone Sample #2
 * @desc SE Filename for Stone.
 * @default fst_stone_light_walk_002
 *
 * @param Stone Sample #3
 * @desc SE Filename for Stone.
 * @default fst_stone_light_walk_003
 *
 * @param Stone Sample #4
 * @desc SE Filename for Stone.
 * @default
 *
 * @param Stone Sample #5
 * @desc SE Filename for Stone.
 * @default
 *
 * @param Stone Sample #6
 * @desc SE Filename for Stone.
 * @default
 *
 * @param Stone Sample #7
 * @desc SE Filename for Stone.
 * @default
 *
 * @param Stone Sample #8
 * @desc SE Filename for Stone.
 * @default
 *
 * @param Stone Sample #9
 * @desc SE Filename for Stone.
 * @default
 *
 * @param Stone Sample #10
 * @desc SE Filename for Stone.
 * @default
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Metal Sample #1
 * @desc SE Filename for Metal.
 * @default fst_metal_light_walk_001
 *
 * @param Metal Sample #2
 * @desc SE Filename for Metal.
 * @default fst_metal_light_walk_002
 *
 * @param Metal Sample #3
 * @desc SE Filename for Metal.
 * @default fst_metal_light_walk_003
 *
 * @param Metal Sample #4
 * @desc SE Filename for Metal.
 * @default fst_metal_light_walk_004
 *
 * @param Metal Sample #5
 * @desc SE Filename for Metal.
 * @default fst_metal_light_walk_005
 *
 * @param Metal Sample #6
 * @desc SE Filename for Metal.
 * @default fst_metal_light_walk_006
 *
 * @param Metal Sample #7
 * @desc SE Filename for Metal.
 * @default
 *
 * @param Metal Sample #8
 * @desc SE Filename for Metal.
 * @default
 *
 * @param Metal Sample #9
 * @desc SE Filename for Metal.
 * @default
 *
 * @param Metal Sample #10
 * @desc SE Filename for Metal.
 * @default
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Optional I Sample #1
 * @desc SE Filename for User Optional I.
 * @default
 *
 * @param Optional I Sample #2
 * @desc SE Filename for User Optional I.
 * @default
 *
 * @param Optional I Sample #3
 * @desc SE Filename for User Optional I.
 * @default
 *
 * @param Optional I Sample #4
 * @desc SE Filename for User Optional I.
 * @default
 *
 * @param Optional I Sample #5
 * @desc SE Filename for User Optional I.
 * @default
 *
 * @param Optional I Sample #6
 * @desc SE Filename for User Optional I.
 * @default
 *
 * @param Optional I Sample #7
 * @desc SE Filename for User Optional I.
 * @default
 *
 * @param Optional I Sample #8
 * @desc SE Filename for User Optional I.
 * @default
 *
 * @param Optional I Sample #9
 * @desc SE Filename for User Optional I.
 * @default
 *
 * @param Optional I Sample #10
 * @desc SE Filename for User Optional I.
 * @default
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Optional II Sample #1
 * @desc SE Filename for User Optional II.
 * @default
 *
 * @param Optional II Sample #2
 * @desc SE Filename for User Optional II.
 * @default
 *
 * @param Optional II Sample #3
 * @desc SE Filename for User Optional II.
 * @default
 *
 * @param Optional II Sample #4
 * @desc SE Filename for User Optional II.
 * @default
 *
 * @param Optional II Sample #5
 * @desc SE Filename for User Optional II.
 * @default
 *
 * @param Optional II Sample #6
 * @desc SE Filename for User Optional II.
 * @default
 *
 * @param Optional II Sample #7
 * @desc SE Filename for User Optional II.
 * @default
 *
 * @param Optional II Sample #8
 * @desc SE Filename for User Optional II.
 * @default
 *
 * @param Optional II Sample #9
 * @desc SE Filename for User Optional II.
 * @default
 *
 * @param Optional II Sample #10
 * @desc SE Filename for User Optional II.
 * @default
 *
 * @param --------
 * @desc Separating Line
 * @default --------
 *
 * @param Optional III Sample #1
 * @desc SE Filename for User Optional III.
 * @default
 *
 * @param Optional III Sample #2
 * @desc SE Filename for User Optional III.
 * @default
 *
 * @param Optional III Sample #3
 * @desc SE Filename for User Optional III.
 * @default
 *
 * @param Optional III Sample #4
 * @desc SE Filename for User Optional III.
 * @default
 *
 * @param Optional III Sample #5
 * @desc SE Filename for User Optional III.
 * @default
 *
 * @param Optional III Sample #6
 * @desc SE Filename for User Optional III.
 * @default
 *
 * @param Optional III Sample #7
 * @desc SE Filename for User Optional III.
 * @default
 *
 * @param Optional III Sample #8
 * @desc SE Filename for User Optional III.
 * @default
 *
 * @param Optional III Sample #9
 * @desc SE Filename for User Optional III.
 * @default
 *
 * @param Optional III Sample #10
 * @desc SE Filename for User Optional III.
 * @default
 * ===========================================================================
 * @help Ryusa Footstep Sound Effects System
 * Responsive footstep sound efx when actor moving.
 * Author: TsunetakaRyu / Ryusa Works
 * Special Thanks: llllllama, Mr-Liu(过眼烟云), Sanshiro
 *
 * <Features:>
 * ·Unique sound samples (up to 10) for each type of terrains.
 * ·Randomized with Round-Robin Algorithm, Samples from each certain type of terrain will be playing back randomized.
 * ·Introduced 'Anti Machine-Gun Effect Suppressor' to make the sounds more humanizing.
 *
 * <What is...>
 * ·Randomized with Round-Robin Algorithm:
 *  Supposing there's a black box with a certain quantity of balls marked with a unique number,
 *  every time you pick up a ball and reading the number then put back in the box. You can do this action anytime if you want.
 *  And this smart box has a mechanism to make it possible that there's not the same number around the adjacent picking up.
 *  So if each sample bank from each terrain type is larger than 2 samples,
 *  you will not heard a same sample playing back once again while your next move or dash.
 * ·Anti Machine-Gun Effect Suppressor:
 *  While you like to use samples from yourself, even few samples. Let's say, only 1 sample of grass.
 *  Then your actor steps into grassland, you heard the footstep sound like a continuous machine-gun firing...
 *  By generating a random value around a certain range, this 'Suppressor' will be able to control the playback volume,
 *  Then with the ceiling volume to limit the maximum volume, the result of footstep playing back will be humanized.
 *
 * <How to use>
 * By Double clicking the parameters to see the help infos.
 * I also packed a picture for people to quickly setting up.
 *
 * By default, ID mark - terrain type table:
 * 1 - Grassland, you can also use it as carpets.
 * 2 - Sand Roads.
 * 3 - Snow Roads.
 * 4 - Wood Floor.
 * 5 - Water or Ford.
 * 6 - Gravel Road.
 * 7 - Metals surface, you can also use it as Marble Roads.
 * 8, 9 and 10 is the user option, set want you want!
 *
 *
 * <Recommanded>
 * There's still a few little unsynchronized between sounds and graphics,
 * it's the problem of refreshing mechanism and the sound samples themselves.
 * So I strongly recommend you guys using Sanshiro's AnalogMove with my plugin.
 * http://forums.rpgmakerweb.com/index.php?/topic/49828-analog-move/
 *
 * <Compatibility>
 * Sanshiro - AnalogMove 1.33 or above
 * This plugin locked some parameters while you are using AnalogMove:
 * N Steps for 1 Sound when Dashing
 * N Steps for 1 Sound when Walking
 * Since AnalogMove or any other pixel-moving plugin will slicing the tile into pieces,
 * the unit of 'step' has changed, such as one tile means 20 steps, so you should try a best number for them.
 *
 * <Changelogs>
 * 1.2 Terrain Type is increasing into 10, three types for user setting.
 * 1.1 Coding compacted and reset some parameters' default value.
 * 1.0 Compatible with Sanshiro's AnalogMove.
 *
 * OGG Resources Source From:
 * Merged from a MOD of The Elder Scroll V: Skyrim "IMMERSIVE SOUNDS - COMPENDIUM" by lazygecko
 * Original Footsteps are provided from freesound.org by following providers:
 * ABouch, Halleck, DasDeer, Corsica-S, ddunkley, nickb1608, mallement, Vosvoy, RutgerMuller, jwb4, cheeseheadburger, martinimeniscus
 *
 * ==========
 * Ryusa Works Plugin Stuff
 * http://www.star01.net/channel/1070
 * ==========
 */
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Ryusa_FootstepSE = 1.02;
var RyusaWorks = RyusaWorks || {};
RyusaWorks.Ryusa_FootstepSE = RyusaWorks.Ryusa_FootstepSE || {};

//-----------------------------------------------------------------------------
// 主处理
//-----------------------------------------------------------------------------
function Ryusa_Footstep_SE() {
    throw new Error('Speical thanks to: llllllama, Mr-Liu and Sanshiro.');
}

var parameters = PluginManager.parameters('Ryusa_FootstepSE');
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE._debug = Boolean(parameters['Displaying Log'] == 'true');
Ryusa_Footstep_SE._switch = Number(parameters['Function Switch']);
Ryusa_Footstep_SE._use_region_id = Boolean(parameters['Use Region ID'] == 'true');
Ryusa_Footstep_SE._basic_volume = Number(parameters['Basic Volume']);
Ryusa_Footstep_SE._Ceiling = Number(parameters['Ceiling']);
Ryusa_Footstep_SE._dashing_hotfix = Number(parameters['N Steps for 1 Sound when Dashing']);
Ryusa_Footstep_SE._walking_hotfix = Number(parameters['N Steps for 1 Sound when Walking']);
Ryusa_Footstep_SE._walking_phase = Number(parameters['Walking Phase Adjusting']);
Ryusa_Footstep_SE._enable_anti_machinegun = Boolean(parameters['Enable Anti-Machinegun Effects'] == 'true');
Ryusa_Footstep_SE._anti_machinegun_value = Number(parameters['Anti-Machinegun Level']);
Ryusa_Footstep_SE._analogmove_patch = Boolean(parameters['AnalogMove Patch']);
//Ryusa_Footstep_SE._cloth_type = Number(parameters['Armor Type ID for Cloth']);
//Ryusa_Footstep_SE._lightarmor_type = Number(parameters['Armor Type ID for Light Armor']);
//Ryusa_Footstep_SE._heavyarmor_type = Number(parameters['Armor Type ID for Heavy Armor']);
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE._id_as_grass = Number(parameters['Region or Terrain ID as Grass']);
Ryusa_Footstep_SE._id_as_sand  = Number(parameters['Region or Terrain ID as Sand']);
Ryusa_Footstep_SE._id_as_snow  = Number(parameters['Region or Terrain ID as Snow']);
Ryusa_Footstep_SE._id_as_wood  = Number(parameters['Region or Terrain ID as Wood']);
Ryusa_Footstep_SE._id_as_water = Number(parameters['Region or Terrain ID as Water']);
Ryusa_Footstep_SE._id_as_stone = Number(parameters['Region or Terrain ID as Stone']);
Ryusa_Footstep_SE._id_as_metal = Number(parameters['Region or Terrain ID as Metal']);
Ryusa_Footstep_SE._id_as_opti  = Number(parameters['Region or Terrain ID as Optional I'])
Ryusa_Footstep_SE._id_as_optii = Number(parameters['Region or Terrain ID as Optional II'])
Ryusa_Footstep_SE._id_as_optiii= Number(parameters['Region or Terrain ID as Optional III'])
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE._grass_samples = [];
Ryusa_Footstep_SE._valid_samples_of_grass = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._grass_samples[i] = String(parameters['Grass Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._sand_samples = [];
Ryusa_Footstep_SE._valid_samples_of_sand = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._sand_samples[i] = String(parameters['Sand Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._snow_samples = [];
Ryusa_Footstep_SE._valid_samples_of_snow = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._snow_samples[i] = String(parameters['Snow Sample #'+(i+1)])
};
Ryusa_Footstep_SE._wood_samples = [];
Ryusa_Footstep_SE._valid_samples_of_wood = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._wood_samples[i] = String(parameters['Wood Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._water_samples = [];
Ryusa_Footstep_SE._valid_samples_of_water = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._water_samples[i] = String(parameters['Water Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._stone_samples = [];
Ryusa_Footstep_SE._valid_samples_of_stone = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._stone_samples[i] = String(parameters['Stone Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._metal_samples = [];
Ryusa_Footstep_SE._valid_samples_of_metal = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._metal_samples[i] = String(parameters['Metal Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._opti_samples = [];
Ryusa_Footstep_SE._valid_samples_of_opti = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._opti_samples[i] = String(parameters['Optional I Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._optii_samples = [];
Ryusa_Footstep_SE._valid_samples_of_optii = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._optii_samples[i] = String(parameters['Optional II Sample #'+(i+1)]);
};
Ryusa_Footstep_SE._optiii_samples = [];
Ryusa_Footstep_SE._valid_samples_of_optiii = [];
for (var i = 0; i <= 9; i++) {
  Ryusa_Footstep_SE._optiii_samples[i] = String(parameters['Optional III Sample #'+(i+1)]);
};
//-----------------------------------------------------------------------------
// 初始化
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.initialize = function () {
    // 修正不正确的值
    if (this._basic_volume > 100) {
        this._basic_volume = 100;
    }
    else if (this._basic_volume < 0) {
        this._basic_volume = 0;
    };
    if (this._anti_machinegun_value > 25) {
        this._anti_machinegun_value = 25;
    }
    else if (this._anti_machinegun_value < 5) {
        this._anti_machinegun_value = 5;
    };
    if (this._dashing_hotfix < 0) {
      this._dashing_hotfix = 1;
    }
    else if (this._dashing_hotfix > 128) {
      this._dashing_hotfix = 128;
    }
    else if (Imported.SAN_AnalogMove && this._analogmove_patch) {
      this._dashing_hotfix = 18;
    };
    if (this._walking_hotfix < 0) {
      this._walking_hotfix = 1;
    }
    else if (Imported.SAN_AnalogMove && this._analogmove_patch) {
      this._walking_hotfix = 15;
    }
    else if (this._walking_hotfix > 128) {
      this._walking_hotfix = 128;
    };
    if (this._walking_phase < 0) {
      this._walking_phase = 0;
    }
    else if (this._walking_phase > 360) {
      this._walking_phase = 360;
    };
    // 初始化数值
    this._dash_count = 0;
    this._walk_count = 0;
    // 初始化可用的 Sample List
    function valid_samples(array) {
        var temp_array = [];
        for (var i = 0; i <= array.length; i++) {
            if (array[i]) {
                temp_array.push(array[i]);
            }
        }
        return temp_array;
    }
    // 将可用的 Sample 装入各自的数组内
    this._valid_samples_of_grass = valid_samples(this._grass_samples);
    this._valid_samples_of_sand  = valid_samples(this._sand_samples);
    this._valid_samples_of_snow  = valid_samples(this._snow_samples);
    this._valid_samples_of_wood  = valid_samples(this._wood_samples);
    this._valid_samples_of_water = valid_samples(this._water_samples);
    this._valid_samples_of_stone = valid_samples(this._stone_samples);
    this._valid_samples_of_metal = valid_samples(this._metal_samples);
    this._valid_samples_of_opti  = valid_samples(this._opti_samples);
    this._valid_samples_of_optii = valid_samples(this._optii_samples);
    this._valid_samples_of_optiii= valid_samples(this._optiii_samples);
    this._last = 0;
};

Ryusa_Footstep_SE.initialize();

//-----------------------------------------------------------------------------
// 判断是否启用脚步声系统
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.enable = function () {
    return $gameSwitches.value(this._switch);
};

//-----------------------------------------------------------------------------
// 预处理
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.play = function () {
    if (this.enable() && this.is_moving()) {
        return this.play_se();
    }
};

//-----------------------------------------------------------------------------
// 判断角色移动状态
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.is_moving = function () {
    return $gamePlayer.isMoving();
};

Ryusa_Footstep_SE.is_dashing = function () {
    return $gamePlayer.isDashing();
};

Ryusa_Footstep_SE.is_stopping = function () {
    return $gamePlayer.isStopping();
};

//-----------------------------------------------------------------------------
// 获取区域 ID 或地形 ID
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.get_mark = function () {
    // 如果使用区域 ID
    if (this._use_region_id) {
        return $gameMap.regionId($gamePlayer.x, $gamePlayer.y);
    }
    // 如果使用地形 ID
    else {
        return $gamePlayer.terrainTag();
    }
};

//-----------------------------------------------------------------------------
// 执行 Round Robin 算法
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.rr_sample = function (array) {
    var output_sample;
    var index;
    // 执行 RR 算法
    while (!index || index === this._last) {
        //index = Math.floor(Math.random() * array.length);
        index = (Math.random() * array.length).toFixed(0);
    }
    this._last = index;
    output_sample = array[index];
    return output_sample;
  };

//-----------------------------------------------------------------------------
// 获取地形对应的采样数组
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.get_terrain_based_sample = function () {
    var mark = this.get_mark();
    this.debug("terrain id is: " + mark);
    switch (mark) {
        case this._id_as_grass:
            return this.rr_sample(this._valid_samples_of_grass);
            break;
        case this._id_as_sand:
            return this.rr_sample(this._valid_samples_of_sand);
            break;
        case this._id_as_snow:
            return this.rr_sample(this._valid_samples_of_snow);
            break;
        case this._id_as_wood:
            return this.rr_sample(this._valid_samples_of_wood);
            break;
        case this._id_as_water:
            return this.rr_sample(this._valid_samples_of_water);
            break;
        case this._id_as_stone:
            return this.rr_sample(this._valid_samples_of_stone);
            break;
        case this._id_as_metal:
            return this.rr_sample(this._valid_samples_of_metal);
            break;
        case this._id_as_opti:
            return this.rr_sample(this._valid_samples_of_opti);
            break;
        case this._id_as_optii:
            return this.rr_sample(this._valid_samples_of_optii);
            break;
        case this._id_as_optiii:
            return this.rr_sample(this._valid_samples_of_optiii);
            break;
        default:
            return;
    }
};

//-----------------------------------------------------------------------------
// 机关枪现象抑制
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.anti_machinegun = function () {
  var temp_value;
    // 执行机关枪现象抑制
    if (this._enable_anti_machinegun) {
      temp_value = this._basic_volume + this._anti_machinegun_value * Math.floor(Math.random() - Math.random());
      // 简易音量限制
      if (temp_value > this._ceiling) {
        return this._ceiling;
      }
      else {
        return temp_value;
      };
    }
    else {
        return this._basic_volume;
    };
};

//-----------------------------------------------------------------------------
// 播放脚步声
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.play_se = function () {
    var fixed_volume = this.anti_machinegun();
    var sequenced_sample = this.get_terrain_based_sample();
    //var angle = 0;
    this.debug("playing sample: " + sequenced_sample);
    var sample = {name: sequenced_sample, volume: fixed_volume, pitch: 100, pan: 0};
    if (sequenced_sample) {
        // 如果是跑步状态则进行修正，间隔 dashing_hotfix 步播放一次脚步声
        if (this.is_dashing()) {
            if (this._dash_count === 0) {
                AudioManager.playSe(sample);
            }
            this._dash_count ++;
            this._dash_count = this._dash_count % this._dashing_hotfix;
        }
        // 遗留：未对跳跃状态进行判断
        // 如果是行走状态则进行修正，间隔 walking_hotfix 步播放一次脚步声
        else {
          if (this._walk_count === 0) {
            AudioManager.playSe(sample);
          }
          this._walk_count ++;
          this._walk_count = this._walk_count % this._walking_hotfix;
        }
    }
};

//-----------------------------------------------------------------------------
// 调试
//-----------------------------------------------------------------------------
Ryusa_Footstep_SE.debug = function(message) {
    if (this._debug) {
        console.log(message);
    }
};

//-----------------------------------------------------------------------------
// 复写
//-----------------------------------------------------------------------------
// 复写内容来自 rpg_objects 的 Game_Player
RyusaWorks.Ryusa_FootstepSE.Game_Player_executeMove = Game_Player.prototype.executeMove;
Game_Player.prototype.executeMove = function (direction) {
    RyusaWorks.Ryusa_FootstepSE.Game_Player_executeMove.call(this, direction);
    Ryusa_Footstep_SE.play();
    };

//-----------------------------------------------------------------------------
// Sanshiro 的 Analog Move 兼容补丁
//-----------------------------------------------------------------------------
if (Imported.SAN_AnalogMove && this._analogmove_patch) {
    RyusaWorks.Ryusa_FootstepSE.Game_Plaer_moveByInput = Sanshiro.Game_AnalogMove.Game_Player_moveByInput;
    Sanshiro.Game_AnalogMove.Game_Player_moveByInput = function() {
        RyusaWorks.Ryusa_FootstepSE.Game_Plaer_moveByInput.call(this);
        Ryusa_Footstep_SE.play();
        };
};

