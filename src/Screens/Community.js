import React from "react";
import CommunityTrend from "../Components/CommunityTrend";
import PeopleList from "../Components/PeopleList";
import Cookies from "js-cookie";
import Popup from "../Components/Popup";
import SignIn from "./signin";
import CommunityForm from "./CommunityForm";
import Footer from "../Components/Footer";
import Button from "@material-ui/core/Button";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import { makeStyles } from "@material-ui/core/styles";
import CommunityPopup from "../Components/CommunityPopup";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Bahnschrift Regular",
  },
  button: {
    margin: theme.spacing(1),
    padding: "2% 21% 2% 3% ",
    border: ".5px outset #f1f1f1",
    fontFamily: "Bahnschrift Regular",
    backgroundColor: "white",
    borderRadius: "0",
  },
}));
const Community = (props) => {
  const isLoggedin = Cookies.get("session-id");
  const [openSignin, setOpenSignin] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);
  const classes = useStyles();
  const [OpenCommunitypopup, setOpenCommunitypopup] = React.useState(true);

<<<<<<< HEAD
	return (
		<div style={{ backgroundColor: '#ececec' }}>
			<div>
				<img
					src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1604393124/Theme/community_cover_myo0r3.jpg'
					width='100%'
				/>
			</div>
			<div className='product-job-page-container'>
				<div className='row'>
					<div className='col s12 l8'>
						<div className='row' style={{ margin: '0', padding: '0' }}>
							<div className='col s12 m8'>
								<div className='product-page-head'>Disrupters' club</div>
								<h6 className='product-quote'>Latest cool products or ideas cooking in your mind</h6>
							</div>
						</div>
						<div
							style={{
								width: '100%',
								backgroundColor: 'white',
								padding: '10px',
								cursor: 'pointer',
								borderRadius: '7px',
								fontSize: '1.3em',
								fontWeight: '600',
								border: '1px solid pink'
							}}
							onClick={() => {
								if (isLoggedin) {
									setOpenForm(true);
								} else setOpenSignin(true);
							}}
						>
							<span
								className='btn-floating pulse'
								style={{
									position: 'relative',
									verticalAlign: 'middle',
									padding: '5px 10px',
									backgroundColor: '#dddeee',
									color: 'black',
									borderColor: 'black'
								}}
							>
								<BorderColorOutlinedIcon />
							</span>
							<span style={{ paddingLeft: '15px' }}>What is cooking in your mind ?</span>
						</div>
						<CommunityTrend posts={props.posts} />
					</div>
					<div className='col s12 l4 joblist'>
						<div className='product-page-head left-head' style={{ paddingTop: '5px' }}>
							Leaderboard
						</div>
						<PeopleList jobProfiles={props.jobProfiles} />
					</div>
				</div>
			</div>
			<Popup openPopup={openSignin} setOpenPopup={setOpenSignin}>
				<SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
			</Popup>
			<Popup openPopup={openForm} setOpenPopup={setOpenForm}>
				<CommunityForm openForm={openForm} setOpenForm={setOpenForm} />
			</Popup>
			<Footer />
		</div>
	);
=======
  return (
    <div style={{ backgroundColor: "#ececec" }}>
      {props.posts.length > 0 && props.jobProfiles.length > 0 && (
        <Popup
          noClose={true}
          openPopup={OpenCommunitypopup}
          setOpenPopup={setOpenCommunitypopup}
        >
          <CommunityPopup
            OpenCommunitypopup={OpenCommunitypopup}
            setOpenCommunitypopup={setOpenCommunitypopup}
          />
        </Popup>
      )}
      <div>
        <img
          src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1604393124/Theme/community_cover_myo0r3.jpg"
          width="100%"
        />
      </div>
      <div className="product-job-page-container">
        <div className="row">
          <div className="col s12 l8">
            <div className="row" style={{ margin: "0", padding: "0" }}>
              <div className="col s12 m8">
                <div className="product-page-head">Disrupters' club</div>
                <h6 className="product-quote">
                  Latest cool products or ideas cooking in your mind
                </h6>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "10px",
                cursor: "pointer",
                borderRadius: "7px",
                fontSize: "1.2em",
                fontWeight: "600",
              }}
              onClick={() => {
                if (isLoggedin) {
                  setOpenForm(true);
                } else setOpenSignin(true);
              }}
            >
              <span
                style={{
                  position: "relative",
                  verticalAlign: "middle",
                  padding: "0 15px",
                }}
              >
                <BorderColorOutlinedIcon />
              </span>
              What is cooking in your mind ?
            </div>
            <CommunityTrend posts={props.posts} />
          </div>
          <div className="col s12 l4 joblist">
            <div
              className="product-page-head left-head"
              style={{ paddingTop: "5px" }}
            >
              Leaderboard
            </div>
            <PeopleList jobProfiles={props.jobProfiles} />
          </div>
        </div>
      </div>
      <Popup openPopup={openSignin} setOpenPopup={setOpenSignin}>
        <SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
      </Popup>
      <Popup openPopup={openForm} setOpenPopup={setOpenForm}>
        <CommunityForm openForm={openForm} setOpenForm={setOpenForm} />
      </Popup>
      <Footer />
    </div>
  );
>>>>>>> 4dcf4e2aaff12ac1e3913db2094b03feae091999
};
export default Community;
