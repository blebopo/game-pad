import type { ButtonName } from "../../types/gamepad";

interface FeedbackLayoutProps {
  activeButton: ButtonName;
}

export default function FeedbackLayoutComponent({ activeButton }: FeedbackLayoutProps) {
  return (
    <>
      <h1>Screen</h1>
      <p>{activeButton ?? "Nothing pressed"}</p>
    </>
  );
}