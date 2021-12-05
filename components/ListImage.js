import FastImage from 'react-native-fast-image';

import React, {useState} from 'react';
import {View, Text} from 'react-native';

// 'https://unsplash.it/400/400?image=1'
// 'https://example-chefshare-bucket.s3.us-east-2.amazonaws.com/public/sushi-2853382.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCMp4z77c9bXWE0MArr1Rf8lJyK7zaETZy%2BSXpST5nZjwIhALt0j7H2uG0Y%2FXhHjs%2FkYQADmIKjnEaDW9DGF%2B6%2BkXb9KvYCCGkQABoMMjg2NDQ2NDM3ODU0Igx9%2BXtRhD%2B92Uydbq0q0wJh2hVeoAQoQMsX4SvOGa2z9AvniRsjbZdhl2WbLcZw0fYD2h%2BhS8ZQNoYxcyFCfVWxcbhY5h3kACipowcmXWAUKnVsYbjjP%2BWYT7x0QC80y%2FYckIWqr8dAd81nH5NF5kjcs%2BKYgdmEcu6nrRlgJLQp1g46w1UEdiqt71QL2ZaRHydiv6HLfd67g8UXcPzSb%2BGGmukblMLBHRJy%2FKJdlPwgZvbxI2vZWaTTQkh2KDcnY%2FAxs55nrnWSeeT9aQMrfOaAaFc32x7R%2Fl6VrxeGUhp5R2gAvZ%2FMTqVf2GOHTaNWc%2BNtexRu%2FRuI4xSMCegSZqoqlNCO8ZqRw4I78SwXWbtlhHAMqr%2Beul6RurBhR2m%2Bs8KN9otCCDfsPAxHJKlCuZ6%2BT4tm7ypgIHy9LAqPSacRyksfQNPK7hZogb83JPV1LljADZn%2Fw0dVYYnCBhfagbZheSAwn%2FivjQY6sgJpc8f8Uev9y%2FjV9MSlTtmrgjCExqCjiY5yJfidNkQMLlOPZyei4WjBheVRN3hqEFcLHDLdikmrZqfiOB0skOhYH7dYBJD5xNMt8fkjZEwp7qc%2FVGE%2FOkpvZpxEtz0lD7rt%2Fpp1D5rO2zE7t8xfTaEGR7haIOvqqQ6WT6dDAK9O23JWd1Q7ftxGCP0dmW%2FYP724bNZbwStJfoxoEJDw1qv05v6v4olqdKO%2FquZJklyxbiznmZlGugmN0R4D5vEjxSKRhbMek69z7GlHMMKUu0NtSWkXom5VqIMJxU5p%2BipUcidT0CV5mi3WvgRehi47Y1iRtiEPgmn0OQUZF0faeDc4DpkTHQ4tQNkZZPB8xK%2FkEuB%2BL41Dfglp0GQIgdy9HW%2B6c4HgEYonm%2BrizZ5jyl%2BOZbI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211205T063826Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUFMMJYXPPAPLFUF6%2F20211205%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=aebea9bd5118df222be636b237ac8add58781fba1c55f0f0e1ddd59264e52c91'
const ListImage = ({
  uri, // 'http://financelystaging-env.eba-ppbpqmef.us-east-2.elasticbeanstalk.com/test.jpg',
  style,
  ...props
}) => {
  return (
    <FastImage
      style={{...style}}
      source={{
        uri,
        // headers: {Authorization: 'someAuthToken'},
        priority: FastImage.priority.normal,
        cache: FastImage.cacheControl.web,
      }}
      resizeMode={FastImage.resizeMode.contain}
      // onProgress={e => console.log(e.nativeEvent.loaded / e.nativeEvent.total)}
      // onLoad={({nativeEvent}) => {
      //   // console.log('state.width / nativeEvent.width', state.width / nativeEvent.width)
      //   console.log(nativeEvent.width, nativeEvent.height);
      // }}
      {...props}
    />
  );
};

export default ListImage;
