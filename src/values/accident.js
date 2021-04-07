const tooltip = <div>Osiguranje od nezgode mogu zaključiti lica od 14. do 75. godine života. Zdravstveno stanje
    osiguranika ne provjerava se prilikom zaključivanja osiguranja.
    Osiguranje važi samo za nezgode koje se dogode tokom vožnje i upravljanja biciklom ili drugim mikro prevoznim
    sredstvom koje je na polisi naznačeno serijskim brojem.
    Osigurane opasnosti:
    <ul>
        <li>Smrt usled nezgode</li>
        <li>Teže povrede</li>
        <li>Prelomi, dislokacije, opekotine i povrede mekih tkiva</li>
    </ul>
</div>;
export const accident = {
    option1 : {
        title : "osiguranje nezgode" ,
        values : [
            {
                title : "Smrt usled nezgode" ,
                value : 10000
            } ,
            {
                title : "Teže povrede" ,
                value : 10000
            } ,
            {
                title : "Prelomi, dislokacije, opekotine i povrede mekih tkiva" ,
                value : 2000
            } ,
        ] ,
        tooltip : tooltip
    } ,
    option2 : {
        title : "osiguranje nezgode" ,
        values : [
            {
                title : "Smrt usled nezgode" ,
                value : 20000
            } ,
            {
                title : "Teže povrede" ,
                value : 20000
            } ,
            {
                title : "Prelomi, dislokacije, opekotine i povrede mekih tkiva" ,
                value : 4000
            } ,
        ] ,
        tooltip : tooltip
    }
};
