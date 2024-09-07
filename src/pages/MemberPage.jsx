import { useEffect, useState } from "react";
import file from "../data.json";
import { useParams } from "react-router-dom";
import MemberCard from "../components/MemberCard/MemberCard";


function MemberPage() {
	const [members, setMembers] = useState([]);
	const [error, setError] = useState(true);
	const [currentMember, setCurrentMember] = useState();
	const params = useParams();
  
	const getMembers = () => {
	  if(file.members){
		setMembers(file.members);
	  }
	  else
		setError(true);
	}

	const getCurrentMember = () => {
		setCurrentMember(members[params.id-1]);
		if(currentMember)
			setError(false)
		else
			setError(true)
	}
  
	useEffect(() => {
	  getMembers();
	}, []);

	useEffect(() => {
		getCurrentMember();
	  }, [members, currentMember]);
  

  return (
    <>
             {error && (
              <p>
                Участник не найден
              </p>
            )}
            {!error && (
              <div>
                Это страница участника {currentMember.gh}
              </div>
            )}
    </>
  );
}

export default MemberPage;
