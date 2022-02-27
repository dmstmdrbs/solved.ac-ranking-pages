import Profile from "@components/profile";
import ManageBoard from "@components/manageBoard";
import { useQuery } from "react-query";
import { IUser } from "@constants/index";
import { fetchUserProfile } from "../../utils/api";
import { Container, Wrapper, Logo } from "./styles";
import { useEffect, useState } from "react";

const Main = () => {
	const [memberList, setMemberList] = useState([
		"maxcha98",
		"dmstmdrbs",
		"dre12am14",
		"tjdqls1668",
		"tph00300",
	]);
	const handleAddMember = (member: string) =>
		setMemberList([...memberList, member]);

	return (
		<Container>
			<Logo>AJOU</Logo>
			<Wrapper>
				{memberList.map((element) => {
					const { isLoading: userDataLoading, data: userData } =
						useQuery<IUser>(["user-data", element], () =>
							fetchUserProfile(element)
						);
					if (userDataLoading)
						return (
							<div key={element}>
								<h1>Loading...</h1>
							</div>
						);
					else
						return (
							userData !== undefined && <Profile key={element} {...userData} />
						);
				})}
			</Wrapper>
			<ManageBoard memberList={memberList} handleAddMember={handleAddMember} />
		</Container>
	);
};

export default Main;
