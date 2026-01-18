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
	// todo those two params are documented as optional? what does this mean typewise? is null/undefined fine?
	addTextField(placeholder: string, text: string): TextField;

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
	// todo same as above, types of params are optional?
	addSecureTextField(placeholder: string, text: string): TextField;

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

	// todo ??
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

	constructor(hex: string, alpha: number);
}

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

declare class Size {
	width: number;
	height: number;

	constructor(width: number, height: number);
}

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
	addSpacer(length: number): WidgetSpacer;
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
