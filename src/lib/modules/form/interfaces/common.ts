export type Values = Record<string, unknown>;

// TODO:
// - Затипизировать formApi
// - Продумать валидацию для FieldArray
export interface CreateFormConfig<TValues, TInitialValues> {
	key: string;
	initialValues?: TInitialValues;
	validate?: (values: TValues) => Partial<Record<keyof TValues, string>>;
	onSubmit: (values: TValues, formApi: any) => void;
}
