import { onDestroy, setContext } from 'svelte';
import type { CreateFormConfig, Values } from './interfaces';
import { INITIAL_VALUES } from './constants';

const formKeys = new Set();

export function createForm<
	TValues extends Record<string, unknown> = Values,
	TInitialValues extends Record<string, unknown> = Partial<TValues>
>({
	key,
	initialValues = INITIAL_VALUES as TInitialValues,
	onSubmit
}: CreateFormConfig<TValues, TInitialValues>) {
	if (formKeys.has(key)) {
		throw new Error(`The form with key "${key}" is already used`);
	}

	formKeys.add(key);

	// TODO: Добавить то, что положить в контекст
	setContext(key, {});

	onDestroy(() => {
		formKeys.delete(key);
	});

	return {};
}
