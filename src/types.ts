/**
 * @file types.ts
 * @author Krisna Pranav
 * @brief Types
 * @version 1.0
 * @date 2024-10-21
 * 
 * @copyright Copyright (c) 2024 Krisna Pranav
 * 
 */

import { ImageSourcePropType } from "react-native";

type Undefined<T> = { [P in keyof T]: P extends undefined ? T[P] : never};

type FilterFlags<Base, Condition> = {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};

type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];
type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;

export type OptionalKeys<T> = Exclude<keyof T, NonNullable<keyof SubType<Undefined<T>, never>>>;

