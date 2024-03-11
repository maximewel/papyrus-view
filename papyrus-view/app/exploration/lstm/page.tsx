import NewModelForm from "./newModelForm";

const models = [
    { id: 1, name: 'model-1' },
    { id: 2, name: 'model-2' },
];

export default function ViT() {
    return (
        <div className="flex-col px-2">
            { /* Title */}
            <p>Vit stands for vision transformers.</p>
            { /* Preparation view */}
            <div className="flex-row content-between rounded overflow-hidden shadow-lg">
                <div className="inline">
                    <form className="mx-auto flex-col">
                        <label htmlFor="model-select" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an already-trained model</label>
                        <select id="model-select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {models.map(model => (
                                <option key={model.id}>
                                    {model.name}
                                </option>
                            ))}
                        </select>
                    </form>
                </div>
                <div className="inline rounded overflow-hidden shadow-lg">
                    <label htmlFor="new-model" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Train a new model !</label>
                    <NewModelForm></NewModelForm>
                </div>
            </div>
            { /* Model visualisazion */}
            <div className="flex-row">
                <div>
                    Train loss per epoch
                </div>
                <div>
                    Test loss per epoch
                </div>
            </div>
        </div>
    );

}