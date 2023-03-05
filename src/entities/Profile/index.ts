export { IProfile, IProfileSchema } from "./model/types/profile";
export { profileActions, profileReducer } from "./model/slice/profileSlice";
export { fetchProfileData } from "./model/services/fetchProfileData";
export { default as ProfileCard } from "./ui/ProfileCard/ProfileCard";
