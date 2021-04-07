import * as React from "react";

const valuesTooltip = <div><span style={{ fontWeight : "bold" }}>Osiguranje pokriva odgovornost</span> osiguranika koji
    je naveden u polisi osiguranja, na teritoriji Crme Gore.
    <span style={{ fontWeight : "bold" }}>Osigurana suma</span> po štetnom događaju iznosi <span
        style={{ fontWeight : "bold" }}>50.000 €</span> za <span
        style={{ fontWeight : "bold" }}>lica i stvari</span> (jedinstvena suma osiguranja).
    Godišnji agregat jednak je sumi osiguranja.
    Učešće osiguranika u šteti je <span style={{ fontWeight : "bold" }}>10%</span>, ali ne manje od 100 €</div>;

export const values = {
    liability : {
        title : "osiguranje odgovornosti" ,
        values : [
            {
                title : "suma osiguranja" ,
                value : 50000
            }
        ] ,
        tooltip : valuesTooltip
    }

};
