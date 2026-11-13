const API_URL = "https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json";

export async function jibMovietSeries() {

    try {
        const istijabaDylData = await fetch(API_URL);

        if (!istijabaDylData.ok) {
            console("Erreur lors du chargement des données");
        }

        const data = await istijabaDylData.json();

        return data;

    } catch (error) {
        console.log("Erreur :", error);
    }
}
