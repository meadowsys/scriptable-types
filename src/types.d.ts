declare class config {
	/**
	 * Whether or not the script is running in the app
	 */
	static readonly runsInApp: boolean;

	/**
	 * Whether or not the script is running in the action extension
	 */
	static readonly runsInActionExtension: boolean;

	/**
	 * Whether or not the script is running in Siri
	 */
	static readonly runsWithSiri: boolean;

	/**
	 * Whether or not the script is running in either a home screen
	 * or a lock screen widget
	 */
	static readonly runsInWidget: boolean;

	/**
	 * Whether or not the script is running in an accessory widget on
	 * the lock screen (iOS 16 or later)
	 */
	static readonly runsInAccessoryWidget: boolean;

	/**
	 * Whether or not the script is running in notification
	 */
	static readonly runsInNotification: boolean;

	/**
	 * Whether or not the script was run from the home screen
	 */
	static readonly runsFromHomeScreen: boolean;

	/**
	 * The size of the widget that the script is running in
	 * (`null` if not running in a widget)
	 */
	static readonly widgetFamily:
		| "small"
		| "medium"
		| "large"
		| "extraLarge"
		| "accessoryRectangular"
		| "accessoryInline"
		| "accessoryCircular";

	private constructor();
}

declare class args {
	/**
	 * @deprecated
	 */
	static readonly length: number;

	/**
	 * @deprecated
	 */
	static readonly all: Array<unknown>;

	static readonly plainTexts: Array<string>;
	static readonly urls: Array<string>;
	static readonly fileURLs: Array<string>;
	static readonly images: Array<string>;
	static readonly queryParameters: { [k: string]: string };

	/**
	 * @deprecated
	 */
	static readonly siriShortcutArguments: { [k: string]: string };

	static readonly shortcutParameter: unknown;
	static readonly widgetParameter: unknown;
	static readonly notification: Notification;

	private constructor();
}

/**
 * Presents an alert
 *
 * Use this to configure an alert presented modally or as a sheet. After
 * configuring the alert, call presentAlert() or presentSheet() to present the
 * alert. The two presentation methods will return a value which carries the
 * index of the action that was selected when fulfilled.
 */
declare class Alert {
	/**
	 * Title displayed in the alert (usually a short string)
	 */
	title: string;

	/**
	 * Detailed message displayed in the alert
	 */
	message: string;

	/**
	 * Constructs a new alert
	 */
	constructor();

	/**
	 * Adds an action button to the alert
	 *
	 * Use the number value returned from presentAlert() or presentSheet() to
	 * check which action was selected
	 *
	 * @param title Title of the action
	 */
	addAction(title: string): void;

	/**
	 * Adds a destructive action to the alert
	 *
	 * Destructive action titles have a red text color, signaling that the
	 * action may modify or delete data.
	 *
	 * @param title Title of the action
	 */
	addDestructiveAction(title: string): void;

	/**
	 * Adds a cancel action to the alert
	 *
	 * When a cancel action is selected, the number provided by presentAlert()
	 * or presentSheet() will be `-1`. Please note that when running on iPad
	 * and presenting using presentSheet(), the action will not be shown in the
	 * list of actions. The operation is cancelled by tapping outside the sheet.
	 *
	 * An alert can only contain a single cancel action. Attempting to add more
	 * cancel actions will remove any previously added cancel actions.
	 *
	 * @param title Title of the action
	 */
	addCancelAction(title: string): void;

	/**
	 * Adds a text field prompting for user input
	 *
	 * Retrieve the value for the text field using textFieldValue() and supply
	 * the index of the text field. Indices for text fields are assigned in the
	 * same order as they are added to the alert starting at 0.
	 *
	 * Text fields are not supported when using the sheet presentation.
	 *
	 * @param placeholder Optional placeholder displayed when the text field is empty
	 * @param text Optional default value for the text field
	 * @returns Text field added to the alert
	 */
	addTextField(placeholder?: string, text?: string): TextField;

	/**
	 * Adds a secure text field prompting for user input
	 *
	 * Values entered into a secure text field will be hidden behind dots.
	 * Retrieve the value for the text field using textFieldValue() and supply
	 * the index of the text field. Indices for text fields are assigned in the
	 * same order as they are added to the alert starting at 0.
	 *
	 * @param placeholder Optional placeholder displayed when the text field is empty
	 * @param text Optional default value for the text field
	 * @returns Text field added to the alert
	 */
	addSecureTextField(placeholder?: string, text?: string): TextField;

	/**
	 * Retrieves value of a text field by index
	 *
	 * Indices for text fields are assigned in the same order as they are added
	 * to the alert starting at 0.
	 *
	 * @param index Index of text field to retrieve the value for
	 * @returns Value of text field at the specified index
	 */
	textFieldValue(index: number): string;

	/**
	 * Present the alert modally
	 *
	 * This is a shorthand for presentAlert().
	 *
	 * @returns Promise resolving to the chosen action index
	 */
	present(): Promise<number>;

	/**
	 * Present the alert modally
	 *
	 * @returns Promise resolving to the chosen action index
	 */
	presentAlert(): Promise<number>;

	/**
	 * Present the alert as a sheet
	 *
	 * @returns Promise resolving to the chosen action index
	 */
	presentSheet(): Promise<number>;
}

declare class Calendar {
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

	readonly identifier: string;
	title: string;
	readonly isSubscribed: boolean;
	readonly allowsContentModifications: boolean;
	color: Color;

	// todo ???
	private constructor();

	supportsAvailability(availability: string): boolean;
	save(): void;
	remove(): void;
}

// todo CalendarEvent

// todo CallbackURL

declare class Color {
	static black(): Color;
	static darkGray(): Color;
	static lightGray(): Color;
	static white(): Color;
	static gray(): Color;
	static red(): Color;
	static green(): Color;
	static blue(): Color;
	static cyan(): Color;
	static yellow(): Color;
	static magenta(): Color;
	static orange(): Color;
	static purple(): Color;
	static brown(): Color;
	static clear(): Color;
	static dynamic(lightColor: Color, darkColor: Color): Color;

	readonly hex: string;
	readonly red: number;
	readonly green: number;
	readonly blue: number;
	readonly alpha: number;

	constructor(hex: string, alpha?: number);
}

// todo console

// todo Contact

// todo ContactsContainer

// todo ContactsGroup

declare class Data {
	static fromString(string: string): Data | null;
	static fromFile(filepath: string): Data;
	static fromBase64String(base64String: string): Data | null;
	static fromJPEG(image: Image): Data;
	static fromPNG(image: Image): Data;
	static fromBytes(bytes: Array<number>): Data;

	// todo ???
	private constructor();

	toRawString(): string;
	toBase64String(): string;
	getBytes(): Array<number>;
}

// todo DateFormatter

// todo DatePicker

// todo Device

// todo Dictation

// todo DocumentPicker

// todo DrawContext

// todo FileManager

declare class Font {
	static largeTitle(): Font;
	static title1(): Font;
	static title2(): Font;
	static title3(): Font;
	static headline(): Font;
	static subheadline(): Font;
	static body(): Font;
	static callout(): Font;
	static footnote(): Font;
	static caption1(): Font;
	static caption2(): Font;
	static systemFont(size: number): Font;
	static ultraLightSystemFont(size: number): Font;
	static thinSystemFont(size: number): Font;
	static lightSystemFont(size: number): Font;
	static regularSystemFont(size: number): Font;
	static mediumSystemFont(size: number): Font;
	static semiboldSystemFont(size: number): Font;
	static boldSystemFont(size: number): Font;
	static heavySystemFont(size: number): Font;
	static blackSystemFont(size: number): Font;
	static italicSystemFont(size: number): Font;
	static ultraLightMonospacedSystemFont(size: number): Font;
	static thinMonospacedSystemFont(size: number): Font;
	static lightMonospacedSystemFont(size: number): Font;
	static regularMonospacedSystemFont(size: number): Font;
	static mediumMonospacedSystemFont(size: number): Font;
	static semiboldMonospacedSystemFont(size: number): Font;
	static boldMonospacedSystemFont(size: number): Font;
	static heavyMonospacedSystemFont(size: number): Font;
	static blackMonospacedSystemFont(size: number): Font;
	static ultraLightRoundedSystemFont(size: number): Font;
	static thinRoundedSystemFont(size: number): Font;
	static lightRoundedSystemFont(size: number): Font;
	static regularRoundedSystemFont(size: number): Font;
	static mediumRoundedSystemFont(size: number): Font;
	static semiboldRoundedSystemFont(size: number): Font;
	static boldRoundedSystemFont(size: number): Font;
	static heavyRoundedSystemFont(size: number): Font;
	static blackRoundedSystemFont(size: number): Font;

	constructor(name: string, size: number);
}

declare class Image {
	static fromFile(filePath: string): Image | null;
	static fromData(data: Data): Image | null;

	// todo ???
	private constructor();

	readonly size: Size;
}

// todo importModule

// todo Keychain

declare class LinearGradient {
	colors: Array<Color>;
	locations: Array<number>;
	startPoint: Point;
	endPoint: Point;

	constructor();
}

declare class ListWidget {
	backgroundColor: Color;
	backgroundImage: Image;
	backgroundGradient: LinearGradient;
	addAccessoryWidgetBackground: boolean;
	spacing: number;
	url: string;
	refreshAfterDate: Date;

	constructor();

	addText(text: string): WidgetText;
	addDate(date: Date): WidgetDate;
	addImage(image: Image): WidgetImage;
	addSpacer(length?: number): WidgetSpacer;
	addStack(): WidgetStack;
	setPadding(top: number, leading: number, bottom: number, trailing: number): void;
	useDefaultPadding(): void;
	presentSmall(): Promise<void>;
	presentMedium(): Promise<void>;
	presentLarge(): Promise<void>;
	presentExtraLarge(): Promise<void>;
	presentAccessoryInline(): Promise<void>;
	presentAccessoryCircular(): Promise<void>;
	presentAccessoryRectangular(): Promise<void>;
}

// todo Location

// todo Mail

// todo Message

// todo module

declare class Notification {
	/**
	 * @deprecated
	 */
	static current(): Notification;
	static allPending(): Promise<Array<Notification>>;
	static allDelivered(): Promise<Array<Notification>>;
	static removeAllPending(): Promise<Array<Notification>>;
	static removeAllDelivered(): Promise<Array<Notification>>;
	static removePending(identifiers: Array<string>): Promise<void>;
	static removeDelivered(identifiers: Array<string>): Promise<void>;
	static resetCurrent(): void;

	identifier: string;
	title: string;
	subtitle: string;
	body: string;
	preferredContentHeight: number;
	badge: number;
	threadIdentifier: string;
	userInfo: { [k: string]: unknown };
	sound?:
		| "default"
		| "accept"
		| "alert"
		| "complete"
		| "event"
		| "failure"
		| "piano_error"
		| "piano_success"
		| "popup";
	openURL: string;
	readonly deliveryDate?: Date;
	nextTriggerDate: Date;
	scriptName: string;
	actions: { [k: string]: string };

	constructor();

	schedule(): Promise<void>;
	remove(): Promise<void>;
	setTriggerDate(date: Date): void;
	setDailyTrigger(hour: number, minute: number, repeats: boolean): void;
	setWeeklyTrigger(weekday: number, hour: number, minute: number, repeats: boolean): void;
	addAction(title: string, url: string, destructive: boolean): void;
}

// todo Pasteboard

// todo Path

// todo Photos

declare class Point {
	x: number;
	y: number;

	constructor(x: number, y: number);
}

// todo QuickLook

// todo Rect

// todo RecurrenceRule

// todo RelativeDateTimeFormatter

// todo Reminder

declare class Request {
	url: string;
	method: string;
	headers?: { [k: string]: string };
	body: unknown;
	timeoutInterval: number;
	onRedirect: (req: Request) => Request;
	readonly response: {
		url: string;
		statusCode: number;
		mimeType: string;
		textEncodingName: string;
		headers: { [k: string]: string };
		// todo cookie type
		cookies: Array<unknown>;
	};
	allowInsecureRequest: boolean;

	constructor(url: string);

	load(): Promise<Data>;
	loadString(): Promise<string>;
	loadJSON(): Promise<unknown>;
	loadImage(): Promise<Image>;
	addParameterToMultipart(name: string, value: string): void;
	addFileDataToMultipart(data: Data, mimeType: string, name: string, filename: string): void;
	addFileToMultipart(filePath: string, name: string, filename: string): void;
	addImageToMultipart(image: Image, name: string, filename: string): void;
}

// todo Safari

declare class Script {
	static name(): string;
	static complete(): void;
	static setShortcutOutput(value: unknown): void;
	static setWidget(widget: unknown): void;

	private constructor();
}

// todo SFSymbol

// todo ShareSheet

declare class Size {
	width: number;
	height: number;

	constructor(width: number, height: number);
}

// todo Speech

declare class TextField {
	text: string;
	placeholder: string;
	isSecure: boolean;
	textColor: Color;
	font: Font;

	private constructor();

	setDefaultKeyboard(): void;
	setNumberPadKeyboard(): void;
	setDecimalPadKeyboard(): void;
	setNumbersAndPunctuationKeyboard(): void;
	setPhonePadKeyboard(): void;
	setWebSearchKeyboard(): void;
	setEmailAddressKeyboard(): void;
	setURLKeyboard(): void;
	setTwitterKeyboard(): void;
	leftAlignText(): void;
	centerAlignText(): void;
	rightAlignText(): void;

}

// todo Timer

// todo UITable

// todo UITableCell

// todo UITableRow

// todo URLScheme

// todo UUID

// todo WebView

// todo WidgetDate
declare class WidgetDate {
	date: Date;
	textColor: Color;
	font: Font;
	textOpacity: number;
	lineLimit: number;
	minimumScaleFactor: number;
	shadowColor: Color;
	shadowRadius: number;
	shadowOffset: Point;
	url: string;

	private constructor();

	leftAlignText(): void;
	centerAlignText(): void;
	rightAlignText(): void;
	applyTimeStyle(): void;
	applyDateStyle(): void;
	applyRelativeStyle(): void;
	applyOffsetStyle(): void;
	applyTimerStyle(): void;
}

declare class WidgetImage {
	image: Image;
	resizable: boolean;
	imageSize: Size;
	imageOpacity: number;
	cornerRadius: number;
	borderWidth: number;
	borderColor: Color;
	containerRelativeShape: boolean;
	tintColor: Color;
	url: string;

	private constructor();

	leftAlignImage(): void;
	centerAlignImage(): void;
	rightAlignImage(): void;
	applyFittingContentMode(): void;
	applyFillingContentMode(): void;
}

declare class WidgetSpacer {
	length?: number;

	// todo ???
	private constructor();
}

declare class WidgetStack {
	backgroundColor: Color;
	backgroundImage: Image;
	backgroundGradient: LinearGradient;
	spacing: number;
	size: Size;
	cornerRadius: number;
	borderWidth: number;
	borderColor: Color;
	url: string;

	// todo ???
	private constructor();

	addText(text: string): WidgetText;
	addDate(date: Date): WidgetDate;
	addImage(image: Image): WidgetImage;
	addSpacer(length?: number): WidgetSpacer;
	addStack(): WidgetStack;
	setPadding(top: number, leading: number, bottom: number, trailing: number): void;
	useDefaultPadding(): void;
	topAlignContent(): void;
	centerAlignContent(): void;
	bottomAlignContent(): void;
	layoutHorizontally(): void;
	layoutVertically(): void;
}

declare class WidgetText {
	text: string;
	textColor: Color;
	font: Font;
	textOpacity: number;
	lineLimit: number;
	minimumScaleFactor: number;
	shadowColor: Color;
	shadowRadius: number;
	shadowOffset: Point;
	url: string;

	// todo ???
	private constructor();

	leftAlignText(): void;
	centerAlignText(): void;
	rightAlignText(): void;
}

// todo I set the event functions as optional because I'm guessing you can't
// read out a function from them before you set one, should verify this is true
declare class XMLParser {
	didStartDocument?: () => void;
	didEndDocument?: () => void;
	didStartElement?: (
		elementName: string,
		attributes: { [k: string]: string }
	) => void;
	didEndElement?: () => void;
	foundCharacters?: () => void;
	parseErrorOccured?: () => void;
	string: string;

	constructor(string: string);

	parse(): boolean;
}
