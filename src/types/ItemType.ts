export type ItemType = {
	id: number; // число, обязательный идентификатор - выдается автоматически при сохранении
	title: string; // строка, не более 50 символов
	description: string; // markdown произвольного размера
	published: boolean; // обязательное поле
	published_from: string; // nullable дата
};
