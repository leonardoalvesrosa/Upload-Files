import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdFileUpload, MdLink } from 'react-icons/md';
import { Container, FileInfo, Preview } from './styles';

const FileList = ({ files }) => (
  <Container>
    {files.map(uploadedFile => (
      <li key={uploadedFile.id}>
        <FileInfo>
          <Preview src={uploadedFile.preview} />
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readableSize}{" "}
              {!!uploadedFile.url && (
                <button onClick={() => { }}>Excluir</button>
              )}
            </span>
          </div>
        </FileInfo>

        <div>
          {!uploadedFile.uploded && !uploadedFile.error && (
            <CircularProgressbar
              styles={{
                root: { width: 24 },
                path: { stroke: '#7159c1' }
              }}
              strokeWidth={10}
              percentage={uploadedFile.progress}
            />
          )}

          {uploadedFile.url && (
            <a
              href="http://localhost:3000/files/5e29dc241b1ec27a010cbb2a8eb21670-cobra.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
            </a>
          )}

          {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
          {uploadedFile.error && <MdError size={24} color="#e57878" />}

        </div>
      </li>
    ))}
  </Container>
);

export default FileList;