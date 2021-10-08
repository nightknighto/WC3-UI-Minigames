import { addScriptHook, W3TS_HOOK } from "w3ts/hooks";
import { SetupExtPlayers } from "Custom Classes/ExtPlayer";
import { EditboxNumbersOnlyInit } from "Custom Classes/Editbox";
import { Timer } from "w3ts/index";
import { DuckHunt } from "duckHunt";
import { FrameAnimation } from "Custom Classes/FramesAnimations";
import { Restaurant } from "Restaurant";

const BUILD_DATE = compiletime(() => new Date().toUTCString());
const TS_VERSION = compiletime(() => require("typescript").version);
const TSTL_VERSION = compiletime(() => require("typescript-to-lua").version);


function tsMain() {
  try {

    SetupExtPlayers()
    FrameAnimation.Init()
    new DuckHunt()
    // new Restaurant()

    

  } catch (error) {
    print("|cffFF0202ERROR: MAIN.TS")
    print(error)    
  }

}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
