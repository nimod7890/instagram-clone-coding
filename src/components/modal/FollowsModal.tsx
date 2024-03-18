import UsersModal from "./UsersModal";
import { ModalProps } from "src/components/@common";
import { ModalState } from "src/constants";
import { useGetFollows } from "src/hooks/query";

type FollowsModalProps = {
  loginId: string;
  state: ModalState;
} & ModalProps;

export default function FollowsModal({
  state,
  loginId,
  ...props
}: FollowsModalProps) {
  const { follows } = useGetFollows({ loginId, state });
  return (
    <UsersModal users={follows.users} {...props} header={{ title: state }} />
  );
}
