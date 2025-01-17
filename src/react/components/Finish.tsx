import { Button, Grid, Typography } from '@material-ui/core';
import React, { FC, ReactElement, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Network } from '../types';
import KeysCreated from './KeyGenerationFlow/4-KeysCreated';

const ContentGrid = styled(Grid)`
  height: 320px;
  margin-top: 16px;
`;

const QuietText = styled(Typography)`
  color: gray;
  text-align: center;
`;

const BottomGrid = styled(Grid)`
  margin-top: -20px;
`;


type Props = {
  onStepBack: () => void,
  onStepForward: () => void,
  folderPath: string,
  network: Network
}

/**
 * This is the final page displaying information about the keys
 * 
 * @param props.onStepBack the function to execute when the user steps back
 * @param props.onStepForward the function to execute when the user steps forward
 * @param props.folderPath the folder path where the keys are located, for display purposes
 * @param props.network the network the app is running for
 * @returns the react element to render
 */
const Finish: FC<Props> = (props): ReactElement => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h1">
          Create Keys
        </Typography>
      </Grid>
      <ContentGrid item container>
        <Grid item xs={12}>
          <KeysCreated folderPath={props.folderPath} network={props.network} />
        </Grid>
      </ContentGrid>
      {props.children}
      <Grid item container justifyContent="space-between">
        <BottomGrid item xs={12}>
          <QuietText>
            Note: Your clipboard will be cleared upon closing this application.
          </QuietText>
        </BottomGrid>
        <Grid item xs={5} />
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={props.onStepForward} tabIndex={2}>Close</Button>
        </Grid>
        <Grid item xs={5} />
      </Grid>
    </Grid>
  );
}

export default Finish;