import React, { useEffect, useState } from "react";
import { Container, Row } from "react-materialize";
import { userService } from "../../../services/userService";
import { isLoggedIn } from "../../../shared/utilities";
import { ProfileModal } from "./ProfileModal/ProfileModal";
import { authentication } from "../../../services/authService";
import { Loader } from "../Loader/Loader";
import { ProfileCard } from "./ProfileCard/ProfileCard";

const Profile = () => {
  const [user, setUser] = useState({});
  const [numbOfPosts, setNumbOfPosts] = useState(null);
  const [numbOfComments, setNumbOfComments] = useState(null);
  const [image, setImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isInfo, setIsInfo] = useState(true);
  const [isPassword, setIsPassword] = useState(false);
  const [isProfileImage, setIsProfileImage] = useState(false);
  const [email, setEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    userService
      .getLoggedUser()
      .then((response) => {
        setUser(response);
        setEmail(response.email);
      })
      .then(() => {
        userService
          .getSingleUserPosts(user.id)
          .then((response) => setNumbOfPosts(response));

        userService
          .getSingleUserComments(user.id)
          .then((response) => setNumbOfComments(response))
          .finally(() => setIsLoading(false));
      });
  });

  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
    setAvatar(null);
  };

  const insertData = (data, name) => {
    switch (name) {
      case "firstName":
        setUser({...user, firstName: data });
        break;
      case "lastName":
        setUser({...user, lastName: data });
        break;
      case "about":
        setUser({...user, about: data });
        break;
      case "prefix":
        setUser({...user, prefix: data });
        break;
      case "email":
        setUser({...user, email: data });
        break;
      case "password":
        setUser({...user, password: data });
        break;
      case "newPassword":
        setUser({...user, newPassword: data });
        break;
      default:
        return null;
    }
  };

  const saveNewPassword = () => {
    setModalIsOpen(false);
    authentication.changePassword(this.state);
  };

  const changeInfo = () => {
    setState({ isInfo: true, isProfileImage: false, isPassword: false });
  };

  const changePassword = () => {
    setState({ isInfo: false, isProfileImage: false, isPassword: true });
  };

  const changeProfileImage = () => {
    setState({ isInfo: false, isProfileImage: true, isPassword: false });
  };

  const setImageFn = (img) => {
    setState({ image: img });
  };

  const uploadImage = () => {
    setState({ isLoading: true });
    userService
      .uploadProfileImage(this.state.user.id, this.state.image)
      .then(() => {
        userService
          .getLoggedUser()
          .then((response) =>
            this.setState({ user: response, modalIsOpen: false })
          )
          .finally(() => this.setState({ isLoading: false }));
      });
  };

  const submitData = () => {
    const data = {};
    const { firstName, lastName, about, prefix } = this.state;
    data.firstName = firstName;
    data.lastName = lastName;
    data.about = about;
    data.prefix = prefix;

    userService.updateUser(this.state.user.id, data).then((response) => {
      console.log(response);
      window.location.reload();
    });
  };

  const imagePreview = (image) => {
    this.setState({ avatar: image });
  };

  const isAuthorized = isLoggedIn();
  if (!isAuthorized) {
    this.props.history.push("/");
  }

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Row>
          <ProfileModal
            user={user}
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            insertData={insertData}
            submitData={submitData}
            isPassword={isPassword}
            isProfileImage={isProfileImage}
            isInfo={isInfo}
            changeInfo={changeInfo}
            changePassword={changePassword}
            changeProfileImage={changeProfileImage}
            saveNewPassword={saveNewPassword}
            uploadImage={uploadImage}
            setImage={setImageFn}
            avatar={avatar}
            imagePreview={imagePreview}
          />
          <ProfileCard
            user={user}
            openModal={openModal}
            numbOfPosts={numbOfPosts}
            numbOfComments={numbOfComments}
          />
        </Row>
      )}
    </Container>
  );
};

export { Profile };
