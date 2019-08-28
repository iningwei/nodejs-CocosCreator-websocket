import * as $protobuf from "./protobuf";
/** Properties of a Role. */
export interface IRole {

    /** Role roleName */
    roleName: string;
}

/** Represents a Role. */
export class Role implements IRole {

    /**
     * Constructs a new Role.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRole);

    /** Role roleName. */
    public roleName: string;

    /**
     * Creates a new Role instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Role instance
     */
    public static create(properties?: IRole): Role;

    /**
     * Encodes the specified Role message. Does not implicitly {@link Role.verify|verify} messages.
     * @param message Role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRole, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Role message, length delimited. Does not implicitly {@link Role.verify|verify} messages.
     * @param message Role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRole, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Role message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Role;

    /**
     * Decodes a Role message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Role;

    /**
     * Verifies a Role message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Role message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Role
     */
    public static fromObject(object: { [k: string]: any }): Role;

    /**
     * Creates a plain object from a Role message. Also converts values to other types if specified.
     * @param message Role
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Role, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Role to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChatData. */
export interface IChatData {

    /** ChatData content */
    content: string;

    /** ChatData dateTime */
    dateTime: string;

    /** ChatData sender */
    sender: IRole;
}

/** Represents a ChatData. */
export class ChatData implements IChatData {

    /**
     * Constructs a new ChatData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatData);

    /** ChatData content. */
    public content: string;

    /** ChatData dateTime. */
    public dateTime: string;

    /** ChatData sender. */
    public sender: IRole;

    /**
     * Creates a new ChatData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatData instance
     */
    public static create(properties?: IChatData): ChatData;

    /**
     * Encodes the specified ChatData message. Does not implicitly {@link ChatData.verify|verify} messages.
     * @param message ChatData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatData message, length delimited. Does not implicitly {@link ChatData.verify|verify} messages.
     * @param message ChatData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatData;

    /**
     * Decodes a ChatData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatData;

    /**
     * Verifies a ChatData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChatData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatData
     */
    public static fromObject(object: { [k: string]: any }): ChatData;

    /**
     * Creates a plain object from a ChatData message. Also converts values to other types if specified.
     * @param message ChatData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LoginReq. */
export interface ILoginReq {

    /** LoginReq role */
    role: IRole;
}

/** Represents a LoginReq. */
export class LoginReq implements ILoginReq {

    /**
     * Constructs a new LoginReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginReq);

    /** LoginReq role. */
    public role: IRole;

    /**
     * Creates a new LoginReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginReq instance
     */
    public static create(properties?: ILoginReq): LoginReq;

    /**
     * Encodes the specified LoginReq message. Does not implicitly {@link LoginReq.verify|verify} messages.
     * @param message LoginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link LoginReq.verify|verify} messages.
     * @param message LoginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginReq;

    /**
     * Decodes a LoginReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginReq;

    /**
     * Verifies a LoginReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginReq
     */
    public static fromObject(object: { [k: string]: any }): LoginReq;

    /**
     * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
     * @param message LoginReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LoginRes. */
export interface ILoginRes {

    /** LoginRes result */
    result: number;
}

/** Represents a LoginRes. */
export class LoginRes implements ILoginRes {

    /**
     * Constructs a new LoginRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginRes);

    /** LoginRes result. */
    public result: number;

    /**
     * Creates a new LoginRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginRes instance
     */
    public static create(properties?: ILoginRes): LoginRes;

    /**
     * Encodes the specified LoginRes message. Does not implicitly {@link LoginRes.verify|verify} messages.
     * @param message LoginRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link LoginRes.verify|verify} messages.
     * @param message LoginRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginRes;

    /**
     * Decodes a LoginRes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginRes;

    /**
     * Verifies a LoginRes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginRes
     */
    public static fromObject(object: { [k: string]: any }): LoginRes;

    /**
     * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
     * @param message LoginRes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginRes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChatReq. */
export interface IChatReq {

    /** ChatReq chatData */
    chatData: IChatData;
}

/** Represents a ChatReq. */
export class ChatReq implements IChatReq {

    /**
     * Constructs a new ChatReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatReq);

    /** ChatReq chatData. */
    public chatData: IChatData;

    /**
     * Creates a new ChatReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatReq instance
     */
    public static create(properties?: IChatReq): ChatReq;

    /**
     * Encodes the specified ChatReq message. Does not implicitly {@link ChatReq.verify|verify} messages.
     * @param message ChatReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatReq message, length delimited. Does not implicitly {@link ChatReq.verify|verify} messages.
     * @param message ChatReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatReq;

    /**
     * Decodes a ChatReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatReq;

    /**
     * Verifies a ChatReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChatReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatReq
     */
    public static fromObject(object: { [k: string]: any }): ChatReq;

    /**
     * Creates a plain object from a ChatReq message. Also converts values to other types if specified.
     * @param message ChatReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChatRes. */
export interface IChatRes {

    /** ChatRes result */
    result: number;

    /** ChatRes chatData */
    chatData: IChatData;
}

/** Represents a ChatRes. */
export class ChatRes implements IChatRes {

    /**
     * Constructs a new ChatRes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatRes);

    /** ChatRes result. */
    public result: number;

    /** ChatRes chatData. */
    public chatData: IChatData;

    /**
     * Creates a new ChatRes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatRes instance
     */
    public static create(properties?: IChatRes): ChatRes;

    /**
     * Encodes the specified ChatRes message. Does not implicitly {@link ChatRes.verify|verify} messages.
     * @param message ChatRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatRes message, length delimited. Does not implicitly {@link ChatRes.verify|verify} messages.
     * @param message ChatRes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatRes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatRes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatRes;

    /**
     * Decodes a ChatRes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatRes;

    /**
     * Verifies a ChatRes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChatRes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatRes
     */
    public static fromObject(object: { [k: string]: any }): ChatRes;

    /**
     * Creates a plain object from a ChatRes message. Also converts values to other types if specified.
     * @param message ChatRes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatRes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
