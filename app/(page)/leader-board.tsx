import LeaderboardScreen from "@/components/CelebrityProfileComponents/CelebrityLeaderBoard";
import { players } from "@/data/players";

export default function LeaderBoard() {
  return <LeaderboardScreen players={players} />;
}