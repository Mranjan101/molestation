FROM node:16
RUN git clone https://github.com/Mranjan101/molestation /root/molestation
WORKDIR /root/molestation
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#molestation
