import React, { Component } from 'react';

type Props = {
    token: string,
    updateToken(newToken: string): void

}

class EditProfile extends Component<Props, {}> {
    render() {
        return (
            <div>
                Edit Profile
            </div>
        );
    }
}

export default EditProfile;