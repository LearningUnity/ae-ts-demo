/// <reference types="types-for-adobe/AfterEffects/2018" />

import { UISample } from "./UISample";

class Main {
    showSample() {
        const sample = new UISample();
        sample.button.onClick = () => {
            alert(sample.textbox.text);
        }
        sample.show();
    }
}

const main = new Main();
main.showSample();
