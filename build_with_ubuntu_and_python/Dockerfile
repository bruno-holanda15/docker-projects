FROM ubuntu

RUN apt-get update && apt-get install -y python3 && apt-get clean

COPY app.py /opt/main.py

CMD python3 /opt/main.py

