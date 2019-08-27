/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.user = (function() {

    /**
     * Properties of a user.
     * @exports Iuser
     * @interface Iuser
     * @property {number} userId user userId
     * @property {string} userName user userName
     */

    /**
     * Constructs a new user.
     * @exports user
     * @classdesc Represents a user.
     * @implements Iuser
     * @constructor
     * @param {Iuser=} [properties] Properties to set
     */
    function user(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * user userId.
     * @member {number} userId
     * @memberof user
     * @instance
     */
    user.prototype.userId = 0;

    /**
     * user userName.
     * @member {string} userName
     * @memberof user
     * @instance
     */
    user.prototype.userName = "";

    /**
     * Creates a new user instance using the specified properties.
     * @function create
     * @memberof user
     * @static
     * @param {Iuser=} [properties] Properties to set
     * @returns {user} user instance
     */
    user.create = function create(properties) {
        return new user(properties);
    };

    /**
     * Encodes the specified user message. Does not implicitly {@link user.verify|verify} messages.
     * @function encode
     * @memberof user
     * @static
     * @param {Iuser} message user message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    user.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
        return writer;
    };

    /**
     * Encodes the specified user message, length delimited. Does not implicitly {@link user.verify|verify} messages.
     * @function encodeDelimited
     * @memberof user
     * @static
     * @param {Iuser} message user message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    user.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a user message from the specified reader or buffer.
     * @function decode
     * @memberof user
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {user} user
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    user.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.int32();
                break;
            case 2:
                message.userName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("userId"))
            throw $util.ProtocolError("missing required 'userId'", { instance: message });
        if (!message.hasOwnProperty("userName"))
            throw $util.ProtocolError("missing required 'userName'", { instance: message });
        return message;
    };

    /**
     * Decodes a user message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof user
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {user} user
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    user.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a user message.
     * @function verify
     * @memberof user
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    user.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.userId))
            return "userId: integer expected";
        if (!$util.isString(message.userName))
            return "userName: string expected";
        return null;
    };

    /**
     * Creates a user message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof user
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {user} user
     */
    user.fromObject = function fromObject(object) {
        if (object instanceof $root.user)
            return object;
        var message = new $root.user();
        if (object.userId != null)
            message.userId = object.userId | 0;
        if (object.userName != null)
            message.userName = String(object.userName);
        return message;
    };

    /**
     * Creates a plain object from a user message. Also converts values to other types if specified.
     * @function toObject
     * @memberof user
     * @static
     * @param {user} message user
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    user.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = 0;
            object.userName = "";
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.userName != null && message.hasOwnProperty("userName"))
            object.userName = message.userName;
        return object;
    };

    /**
     * Converts this user to JSON.
     * @function toJSON
     * @memberof user
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    user.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return user;
})();

module.exports = $root;
