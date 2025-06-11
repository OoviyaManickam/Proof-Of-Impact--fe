import axios from 'axios';

export async function uploadFileToPinata(file: File, apiKey: string, apiSecret: string) {
  const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(url, formData, {
    maxBodyLength: Infinity, // for large files
    headers: {
      'Content-Type': 'multipart/form-data',
      pinata_api_key: apiKey,
      pinata_secret_api_key: apiSecret,
    },
  });

  return response.data; // Contains IpfsHash, etc.
} 