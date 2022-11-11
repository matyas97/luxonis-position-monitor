FROM ghcr.io/luxonis/robothub-app:2022.269.1517-ubuntu22.04

COPY public /frontend/

ARG FILE=app.py
ADD $FILE run.py