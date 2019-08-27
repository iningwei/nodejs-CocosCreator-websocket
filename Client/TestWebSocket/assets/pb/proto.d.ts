import * as $protobuf from "./protobuf";
/** Properties of a user. */
export interface Iuser {

    /** user userId */
    userId: number;

    /** user userName */
    userName: string;
}

/** Represents a user. */
export class user implements Iuser {

    /**
     * Constructs a new user.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iuser);

    /** user userId. */
    public userId: number;

    /** user userName. */
    public userName: string;

    /**
     * Creates a new user instance using the specified properties.
     * @param [properties] Properties to set
     * @returns user instance
     */
    public static create(properties?: Iuser): user;

    /**
     * Encodes the specified user message. Does not implicitly {@link user.verify|verify} messages.
     * @param message user message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iuser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified user message, length delimited. Does not implicitly {@link user.verify|verify} messages.
     * @param message user message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iuser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a user message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns user
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user;

    /**
     * Decodes a user message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns user
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user;

    /**
     * Verifies a user message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a user message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns user
     */
    public static fromObject(object: { [k: string]: any }): user;

    /**
     * Creates a plain object from a user message. Also converts values to other types if specified.
     * @param message user
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: user, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this user to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
