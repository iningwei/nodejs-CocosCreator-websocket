/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Role = (function() {

    /**
     * Properties of a Role.
     * @exports IRole
     * @interface IRole
     * @property {string} roleName Role roleName
     */

    /**
     * Constructs a new Role.
     * @exports Role
     * @classdesc Represents a Role.
     * @implements IRole
     * @constructor
     * @param {IRole=} [properties] Properties to set
     */
    function Role(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Role roleName.
     * @member {string} roleName
     * @memberof Role
     * @instance
     */
    Role.prototype.roleName = "";

    /**
     * Creates a new Role instance using the specified properties.
     * @function create
     * @memberof Role
     * @static
     * @param {IRole=} [properties] Properties to set
     * @returns {Role} Role instance
     */
    Role.create = function create(properties) {
        return new Role(properties);
    };

    /**
     * Encodes the specified Role message. Does not implicitly {@link Role.verify|verify} messages.
     * @function encode
     * @memberof Role
     * @static
     * @param {IRole} message Role message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Role.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.roleName);
        return writer;
    };

    /**
     * Encodes the specified Role message, length delimited. Does not implicitly {@link Role.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Role
     * @static
     * @param {IRole} message Role message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Role.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Role message from the specified reader or buffer.
     * @function decode
     * @memberof Role
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Role} Role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Role.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Role();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.roleName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("roleName"))
            throw $util.ProtocolError("missing required 'roleName'", { instance: message });
        return message;
    };

    /**
     * Decodes a Role message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Role
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Role} Role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Role.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Role message.
     * @function verify
     * @memberof Role
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Role.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.roleName))
            return "roleName: string expected";
        return null;
    };

    /**
     * Creates a Role message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Role
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Role} Role
     */
    Role.fromObject = function fromObject(object) {
        if (object instanceof $root.Role)
            return object;
        var message = new $root.Role();
        if (object.roleName != null)
            message.roleName = String(object.roleName);
        return message;
    };

    /**
     * Creates a plain object from a Role message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Role
     * @static
     * @param {Role} message Role
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Role.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.roleName = "";
        if (message.roleName != null && message.hasOwnProperty("roleName"))
            object.roleName = message.roleName;
        return object;
    };

    /**
     * Converts this Role to JSON.
     * @function toJSON
     * @memberof Role
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Role.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Role;
})();

$root.ChatData = (function() {

    /**
     * Properties of a ChatData.
     * @exports IChatData
     * @interface IChatData
     * @property {string} content ChatData content
     * @property {string} dateTime ChatData dateTime
     * @property {IRole} sender ChatData sender
     */

    /**
     * Constructs a new ChatData.
     * @exports ChatData
     * @classdesc Represents a ChatData.
     * @implements IChatData
     * @constructor
     * @param {IChatData=} [properties] Properties to set
     */
    function ChatData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatData content.
     * @member {string} content
     * @memberof ChatData
     * @instance
     */
    ChatData.prototype.content = "";

    /**
     * ChatData dateTime.
     * @member {string} dateTime
     * @memberof ChatData
     * @instance
     */
    ChatData.prototype.dateTime = "";

    /**
     * ChatData sender.
     * @member {IRole} sender
     * @memberof ChatData
     * @instance
     */
    ChatData.prototype.sender = null;

    /**
     * Creates a new ChatData instance using the specified properties.
     * @function create
     * @memberof ChatData
     * @static
     * @param {IChatData=} [properties] Properties to set
     * @returns {ChatData} ChatData instance
     */
    ChatData.create = function create(properties) {
        return new ChatData(properties);
    };

    /**
     * Encodes the specified ChatData message. Does not implicitly {@link ChatData.verify|verify} messages.
     * @function encode
     * @memberof ChatData
     * @static
     * @param {IChatData} message ChatData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.dateTime);
        $root.Role.encode(message.sender, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ChatData message, length delimited. Does not implicitly {@link ChatData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatData
     * @static
     * @param {IChatData} message ChatData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatData message from the specified reader or buffer.
     * @function decode
     * @memberof ChatData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatData} ChatData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.content = reader.string();
                break;
            case 2:
                message.dateTime = reader.string();
                break;
            case 3:
                message.sender = $root.Role.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("content"))
            throw $util.ProtocolError("missing required 'content'", { instance: message });
        if (!message.hasOwnProperty("dateTime"))
            throw $util.ProtocolError("missing required 'dateTime'", { instance: message });
        if (!message.hasOwnProperty("sender"))
            throw $util.ProtocolError("missing required 'sender'", { instance: message });
        return message;
    };

    /**
     * Decodes a ChatData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatData} ChatData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatData message.
     * @function verify
     * @memberof ChatData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.content))
            return "content: string expected";
        if (!$util.isString(message.dateTime))
            return "dateTime: string expected";
        {
            var error = $root.Role.verify(message.sender);
            if (error)
                return "sender." + error;
        }
        return null;
    };

    /**
     * Creates a ChatData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatData} ChatData
     */
    ChatData.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatData)
            return object;
        var message = new $root.ChatData();
        if (object.content != null)
            message.content = String(object.content);
        if (object.dateTime != null)
            message.dateTime = String(object.dateTime);
        if (object.sender != null) {
            if (typeof object.sender !== "object")
                throw TypeError(".ChatData.sender: object expected");
            message.sender = $root.Role.fromObject(object.sender);
        }
        return message;
    };

    /**
     * Creates a plain object from a ChatData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatData
     * @static
     * @param {ChatData} message ChatData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.content = "";
            object.dateTime = "";
            object.sender = null;
        }
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.dateTime != null && message.hasOwnProperty("dateTime"))
            object.dateTime = message.dateTime;
        if (message.sender != null && message.hasOwnProperty("sender"))
            object.sender = $root.Role.toObject(message.sender, options);
        return object;
    };

    /**
     * Converts this ChatData to JSON.
     * @function toJSON
     * @memberof ChatData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChatData;
})();

$root.LoginReq = (function() {

    /**
     * Properties of a LoginReq.
     * @exports ILoginReq
     * @interface ILoginReq
     * @property {IRole} role LoginReq role
     */

    /**
     * Constructs a new LoginReq.
     * @exports LoginReq
     * @classdesc Represents a LoginReq.
     * @implements ILoginReq
     * @constructor
     * @param {ILoginReq=} [properties] Properties to set
     */
    function LoginReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginReq role.
     * @member {IRole} role
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.role = null;

    /**
     * Creates a new LoginReq instance using the specified properties.
     * @function create
     * @memberof LoginReq
     * @static
     * @param {ILoginReq=} [properties] Properties to set
     * @returns {LoginReq} LoginReq instance
     */
    LoginReq.create = function create(properties) {
        return new LoginReq(properties);
    };

    /**
     * Encodes the specified LoginReq message. Does not implicitly {@link LoginReq.verify|verify} messages.
     * @function encode
     * @memberof LoginReq
     * @static
     * @param {ILoginReq} message LoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        $root.Role.encode(message.role, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link LoginReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginReq
     * @static
     * @param {ILoginReq} message LoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginReq message from the specified reader or buffer.
     * @function decode
     * @memberof LoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginReq} LoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.role = $root.Role.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("role"))
            throw $util.ProtocolError("missing required 'role'", { instance: message });
        return message;
    };

    /**
     * Decodes a LoginReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginReq} LoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginReq message.
     * @function verify
     * @memberof LoginReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        {
            var error = $root.Role.verify(message.role);
            if (error)
                return "role." + error;
        }
        return null;
    };

    /**
     * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginReq} LoginReq
     */
    LoginReq.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginReq)
            return object;
        var message = new $root.LoginReq();
        if (object.role != null) {
            if (typeof object.role !== "object")
                throw TypeError(".LoginReq.role: object expected");
            message.role = $root.Role.fromObject(object.role);
        }
        return message;
    };

    /**
     * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginReq
     * @static
     * @param {LoginReq} message LoginReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.role = null;
        if (message.role != null && message.hasOwnProperty("role"))
            object.role = $root.Role.toObject(message.role, options);
        return object;
    };

    /**
     * Converts this LoginReq to JSON.
     * @function toJSON
     * @memberof LoginReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginReq;
})();

$root.LoginRes = (function() {

    /**
     * Properties of a LoginRes.
     * @exports ILoginRes
     * @interface ILoginRes
     * @property {number} result LoginRes result
     */

    /**
     * Constructs a new LoginRes.
     * @exports LoginRes
     * @classdesc Represents a LoginRes.
     * @implements ILoginRes
     * @constructor
     * @param {ILoginRes=} [properties] Properties to set
     */
    function LoginRes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginRes result.
     * @member {number} result
     * @memberof LoginRes
     * @instance
     */
    LoginRes.prototype.result = 0;

    /**
     * Creates a new LoginRes instance using the specified properties.
     * @function create
     * @memberof LoginRes
     * @static
     * @param {ILoginRes=} [properties] Properties to set
     * @returns {LoginRes} LoginRes instance
     */
    LoginRes.create = function create(properties) {
        return new LoginRes(properties);
    };

    /**
     * Encodes the specified LoginRes message. Does not implicitly {@link LoginRes.verify|verify} messages.
     * @function encode
     * @memberof LoginRes
     * @static
     * @param {ILoginRes} message LoginRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
        return writer;
    };

    /**
     * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link LoginRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginRes
     * @static
     * @param {ILoginRes} message LoginRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginRes message from the specified reader or buffer.
     * @function decode
     * @memberof LoginRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginRes} LoginRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: message });
        return message;
    };

    /**
     * Decodes a LoginRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginRes} LoginRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginRes message.
     * @function verify
     * @memberof LoginRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.result))
            return "result: integer expected";
        return null;
    };

    /**
     * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginRes} LoginRes
     */
    LoginRes.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginRes)
            return object;
        var message = new $root.LoginRes();
        if (object.result != null)
            message.result = object.result | 0;
        return message;
    };

    /**
     * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginRes
     * @static
     * @param {LoginRes} message LoginRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.result = 0;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this LoginRes to JSON.
     * @function toJSON
     * @memberof LoginRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginRes;
})();

$root.ChatReq = (function() {

    /**
     * Properties of a ChatReq.
     * @exports IChatReq
     * @interface IChatReq
     * @property {IChatData} chatData ChatReq chatData
     */

    /**
     * Constructs a new ChatReq.
     * @exports ChatReq
     * @classdesc Represents a ChatReq.
     * @implements IChatReq
     * @constructor
     * @param {IChatReq=} [properties] Properties to set
     */
    function ChatReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatReq chatData.
     * @member {IChatData} chatData
     * @memberof ChatReq
     * @instance
     */
    ChatReq.prototype.chatData = null;

    /**
     * Creates a new ChatReq instance using the specified properties.
     * @function create
     * @memberof ChatReq
     * @static
     * @param {IChatReq=} [properties] Properties to set
     * @returns {ChatReq} ChatReq instance
     */
    ChatReq.create = function create(properties) {
        return new ChatReq(properties);
    };

    /**
     * Encodes the specified ChatReq message. Does not implicitly {@link ChatReq.verify|verify} messages.
     * @function encode
     * @memberof ChatReq
     * @static
     * @param {IChatReq} message ChatReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        $root.ChatData.encode(message.chatData, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ChatReq message, length delimited. Does not implicitly {@link ChatReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatReq
     * @static
     * @param {IChatReq} message ChatReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatReq message from the specified reader or buffer.
     * @function decode
     * @memberof ChatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatReq} ChatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.chatData = $root.ChatData.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("chatData"))
            throw $util.ProtocolError("missing required 'chatData'", { instance: message });
        return message;
    };

    /**
     * Decodes a ChatReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatReq} ChatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatReq message.
     * @function verify
     * @memberof ChatReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        {
            var error = $root.ChatData.verify(message.chatData);
            if (error)
                return "chatData." + error;
        }
        return null;
    };

    /**
     * Creates a ChatReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatReq} ChatReq
     */
    ChatReq.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatReq)
            return object;
        var message = new $root.ChatReq();
        if (object.chatData != null) {
            if (typeof object.chatData !== "object")
                throw TypeError(".ChatReq.chatData: object expected");
            message.chatData = $root.ChatData.fromObject(object.chatData);
        }
        return message;
    };

    /**
     * Creates a plain object from a ChatReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatReq
     * @static
     * @param {ChatReq} message ChatReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.chatData = null;
        if (message.chatData != null && message.hasOwnProperty("chatData"))
            object.chatData = $root.ChatData.toObject(message.chatData, options);
        return object;
    };

    /**
     * Converts this ChatReq to JSON.
     * @function toJSON
     * @memberof ChatReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChatReq;
})();

$root.ChatRes = (function() {

    /**
     * Properties of a ChatRes.
     * @exports IChatRes
     * @interface IChatRes
     * @property {number} result ChatRes result
     * @property {IChatData} chatData ChatRes chatData
     */

    /**
     * Constructs a new ChatRes.
     * @exports ChatRes
     * @classdesc Represents a ChatRes.
     * @implements IChatRes
     * @constructor
     * @param {IChatRes=} [properties] Properties to set
     */
    function ChatRes(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatRes result.
     * @member {number} result
     * @memberof ChatRes
     * @instance
     */
    ChatRes.prototype.result = 0;

    /**
     * ChatRes chatData.
     * @member {IChatData} chatData
     * @memberof ChatRes
     * @instance
     */
    ChatRes.prototype.chatData = null;

    /**
     * Creates a new ChatRes instance using the specified properties.
     * @function create
     * @memberof ChatRes
     * @static
     * @param {IChatRes=} [properties] Properties to set
     * @returns {ChatRes} ChatRes instance
     */
    ChatRes.create = function create(properties) {
        return new ChatRes(properties);
    };

    /**
     * Encodes the specified ChatRes message. Does not implicitly {@link ChatRes.verify|verify} messages.
     * @function encode
     * @memberof ChatRes
     * @static
     * @param {IChatRes} message ChatRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatRes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
        $root.ChatData.encode(message.chatData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ChatRes message, length delimited. Does not implicitly {@link ChatRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatRes
     * @static
     * @param {IChatRes} message ChatRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatRes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatRes message from the specified reader or buffer.
     * @function decode
     * @memberof ChatRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatRes} ChatRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatRes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatRes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = reader.int32();
                break;
            case 2:
                message.chatData = $root.ChatData.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: message });
        if (!message.hasOwnProperty("chatData"))
            throw $util.ProtocolError("missing required 'chatData'", { instance: message });
        return message;
    };

    /**
     * Decodes a ChatRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatRes} ChatRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatRes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatRes message.
     * @function verify
     * @memberof ChatRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatRes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.result))
            return "result: integer expected";
        {
            var error = $root.ChatData.verify(message.chatData);
            if (error)
                return "chatData." + error;
        }
        return null;
    };

    /**
     * Creates a ChatRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatRes} ChatRes
     */
    ChatRes.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatRes)
            return object;
        var message = new $root.ChatRes();
        if (object.result != null)
            message.result = object.result | 0;
        if (object.chatData != null) {
            if (typeof object.chatData !== "object")
                throw TypeError(".ChatRes.chatData: object expected");
            message.chatData = $root.ChatData.fromObject(object.chatData);
        }
        return message;
    };

    /**
     * Creates a plain object from a ChatRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatRes
     * @static
     * @param {ChatRes} message ChatRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatRes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.result = 0;
            object.chatData = null;
        }
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        if (message.chatData != null && message.hasOwnProperty("chatData"))
            object.chatData = $root.ChatData.toObject(message.chatData, options);
        return object;
    };

    /**
     * Converts this ChatRes to JSON.
     * @function toJSON
     * @memberof ChatRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatRes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChatRes;
})();

module.exports = $root;
