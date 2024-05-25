import { ReactWorldCountriesMap } from "react-world-countries-map";
// import mockGeoFeactures from "./src/data/mockGeoFeatures.js";
function MapCustomers() {

    const data =
        [
            { country: "us", value: 2267527 },  // Estados Unidos
            { country: "cn", value: 1664230 }, // China
            { country: "jp", value: 5378136 }, // Japón
            { country: "de", value: 4319286 },  // Alemania
            { country: "es", value: 4034129 },  // España
            { country: "ar", value: 9456229 },  //Argentina
            { country: "gb", value: 3124650 },  // Reino Unido
            { country: "in", value: 3049704 }, // india
            { country: "fr", value: 2938271 },  // francia
            { country: "it", value: 2106287 },  // italia
            { country: "ca", value: 1883487 },  // canada
            { country: "kr", value: 1806707 },  // corea del sur
        ];
    return (
        <div className="h-[88vh]  w-[32rem] bg-gray-200 flex flex-col  rounded-xl border border-gray-200 shadow-xl mt-17 dark:text-white dark:bg-[#16193A]">
            < div className="items-center justify-center flex flex-col m-auto opacity-70 border rounded-xl" >
                <ReactWorldCountriesMap color="blue"
                    tooltipColor="white" tooltipFontSize="0.8rem"
                    tooltipBgColor="blue" tooltipTextColor="white"
                    value-suffix="Customers" size="lg" data={data} />

            </ div>
        </div >
    );
}

export default MapCustomers;