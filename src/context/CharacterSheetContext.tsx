import { createContext } from "react";
import type { ProviderType } from "../interfaces/attributesInterface";

export const CharacterSheetContext = createContext<ProviderType | null>(null);