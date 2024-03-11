import React from "react";

export default function NewModelForm() {
    return (
        <div className="max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model-name">
                        Model name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="model-name" type="text" placeholder="gpt-1" />
                </div>

                <div className="col-row">
                    <p> hyper-parameters </p>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lb-len">
                            Lookback length
                        </label>
                        <input
                            id="lb-len" type="number" placeholder="100"
                            data-input-counter data-input-counter-min="10"
                            data-input-counter-max="500"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fc-len">
                            Forecast length
                        </label>
                        <input
                            id="fc-len" type="number" placeholder="1"
                            data-input-counter data-input-counter-min="1"
                            data-input-counter-max="100"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                </div>

            </form>
        </div>
    );
}