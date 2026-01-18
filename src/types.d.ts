declare class Alert {
	title: string;
	message: string;

	constructor();

	addAction(title: string);
	addDestructiveAction(title: string);
	addCancelAction(title: string);
	addTextField(placeholder: string, text: string): TextField;
	addSecureTextField(placeholder: string, text: string): TextField;
	textFieldValue(index: number): string;
	present(): Promise<number>;
	presentAlert(): Promise<number>;
	presentSheet(): Promise<number>;
};

declare const args: Args;
declare type Args = {
	/**
	 * @deprecated
	 */
	readonly length: number;

	/**
	 * @deprecated
	 */
	readonly all: Array<unknown>;

	readonly plainTexts: Array<string>;
	readonly urls: Array<string>;
	readonly fileURLs: Array<string>;
	readonly images: Array<string>;
	readonly queryParameters: { [k: string]: string };

	/**
	 * @deprecated
	 */
	readonly siriShortcutArguments: { [k: string]: string };

	readonly shortcutParameter: unknown;
	readonly widgetParameter: unknown;
	readonly notification: Notification;
};

declare class Calendar {
	readonly identifier: string;
	title: string;
	readonly isSubscribed: boolean;
	readonly allowsContentModifications: boolean;
	color: Color;

	// todo ??
	private constructor();

	supportsAvailability(availability: string): boolean;
	save();
	remove();
	static forReminders(): Promise<Array<Calendar>>;
	static forEvents(): Promise<Array<Calendar>>;
	static forRemindersByTitle(title: string): Promise<Calendar>;
	static forEventsByTitle(title: string): Promise<Calendar>;
	static createForReminders(title: string): Promise<Calendar>;
	static findOrCreateForReminders(title: string): Promise<Calendar>;
	static defaultForReminders(): Promise<Calendar>;
	static defaultForEvents(): Promise<Calendar>;
	// todo i'm guessing these, need to test
	static presentPicker(allowMultiple: true): Promise<Array<Calendar>>;
	static presentPicker(allowMultiple: false): Promise<[Calendar?]>;
};

// todo CalendarEvent
// todo CallbackURL
// todo Color

declare const config: Config;
declare type Config = {
	readonly runsInApp: boolean;
	readonly runsInActionExtension: boolean;
	readonly runsWithSiri: boolean;
	readonly runsInWidget: boolean;
	readonly runsInAccessoryWidget: boolean;
	readonly runsInNotification: boolean;
	readonly runsFromHomeScreen: boolean;
	readonly widgetFamily:
		| "small"
		| "medium"
		| "large"
		| "extraLarge"
		| "accessoryRectangular"
		| "accessoryInline"
		| "accessoryCircular"
		| null;
};

// todo console
// todo Contact
// todo ContactsContainer
// todo ContactsGroup
// todo Data
// todo DateFormatter
// todo DatePicker
// todo Device
// todo Dictation
// todo DocumentPicker
// todo DrawContext
// todo FileManager
// todo Font
// todo Image
// todo importModule
// todo Keychain
// todo LinearGradient
// todo ListWidget
// todo Location
// todo Mail
// todo Message
// todo module
// todo Notification
// todo Pasteboard
// todo Path
// todo Photos
// todo Point
// todo QuickLook
// todo Rect
// todo RecurrenceRule
// todo RelativeDateTimeFormatter
// todo Reminder
// todo Request
// todo Safari
// todo Script
// todo SFSymbol
// todo ShareSheet
// todo Size
// todo Speech
// todo TextField
// todo Timer
// todo UITable
// todo UITableCell
// todo UITableRow
// todo URLScheme
// todo UUID
// todo WebView
// todo WidgetDate
// todo WidgetImage
// todo WidgetSpacer
// todo WidgetStack
// todo WidgetText
// todo XMLParser
