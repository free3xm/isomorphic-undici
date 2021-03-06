// based on https://unpkg.com/browse/formdata-node@4.0.1/@type/File.d.ts (MIT)
/// <reference types="node" />

import { Blob } from 'buffer'

export interface FileOptions {
  /**
   * Returns the media type ([`MIME`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) of the file represented by a `File` object.
   */
  type?: string
  /**
   * The last modified date of the file as the number of milliseconds since the Unix epoch (January 1, 1970 at midnight). Files without a known last modified date return the current date.
   */
  lastModified?: number
}

export declare class File extends Blob {
  /**
   * Creates a new File instance.
   *
   * @param fileBits An `Array` strings, or [`Buffer`](https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_class_buffer), [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView), [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) objects, or a mix of any of such objects, that will be put inside the [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File).
   * @param name The name of the file.
   * @param options An options object containing optional attributes for the file.
   */
  constructor (fileBits: ReadonlyArray<string | NodeJS.ArrayBufferView | Blob>, name: string, options?: FileOptions)
  /**
   * Name of the file referenced by the File object.
   */
  get name (): string
  /**
   * The last modified date of the file as the number of milliseconds since the Unix epoch (January 1, 1970 at midnight). Files without a known last modified date return the current date.
   */
  get lastModified (): number
  get [Symbol.toStringTag] (): string
  stream (): {
    [Symbol.asyncIterator]: () => AsyncIterableIterator<Uint8Array>
  }
}
