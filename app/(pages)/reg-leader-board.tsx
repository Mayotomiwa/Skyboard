import LeaderboardScreen from "@/components/ProfileComponents/LeaderBoard";
import { players } from "@/data/players";

export default function TabTwoScreen() {
  return <LeaderboardScreen players={players}/>;
}
