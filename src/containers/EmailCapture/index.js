import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Heading,
  Anchor,
  Text,
  Form,
  FormField,
  TextInput,
  Button,
  Paragraph,
} from 'grommet';

import { Link } from '../../components';
import { AppContext } from '../../providers/AppProvider';


const emailValidation = [
  {
    regexp: new RegExp('[^@ \\t\\r\\n]+@'),
    message: 'Enter a valid email address.',
    status: 'error',
  },
  {
    regexp: new RegExp('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+'),
    message: 'Enter a valid email address.',
    status: 'error',
  },
  {
    regexp: new RegExp('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+'),
    message: 'Enter a valid email address.',
    status: 'error',
  },
];
