import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    backgroundColor: '#A5BEC2'
  },
  'body h1': {
    color: '#142A4F'
  },
  'body a': {
    color: '#0C121E'
  },
  'body nav a img': {
    height: [{ unit: 'px', value: 50 }],
    width: [{ unit: 'px', value: 50 }]
  },
  'body header': {
    height: [{ unit: 'px', value: 600 }],
    width: [{ unit: 'string', value: 'auto' }],
    backgroundColor: '#F8F9FA',
    backgroundImage: 'url("/img/cover.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
});
